import argparse
import sys
from pathlib import Path
from backend.app.db import run_migrations, check_db_health
from backend.ingest.loader import load_from_directory_or_zip
from backend.app.main import export_alertas_csv

def main():
    parser = argparse.ArgumentParser(description="CLI de Dino Alert")
    subparsers = parser.add_subparsers(dest="command", required=True)

    # load
    load_parser = subparsers.add_parser("load", help="Cargar datos a la base de datos")
    load_parser.add_argument("--input", "-i", required=True, help="Ruta a la carpeta o zip")
    load_parser.add_argument("--emit-sql", help="Ruta del archivo .sql a generar")

    # export
    export_parser = subparsers.add_parser("export", help="Exportar alertas a CSV")
    export_parser.add_argument("--output", "-o", required=True, help="Ruta del archivo CSV de salida")
    export_parser.add_argument("--tenant", "-t", help="Filtrar por tenant específico")

    # process
    proc_parser = subparsers.add_parser("process", help="Procesar métricas incrementalmente")
    proc_parser.add_argument("--tenant", "-t", help="Tenant a procesar")
    proc_parser.add_argument("--reset", action="store_true", help="Reiniciar estado del tenant")

    # run (backup command: ingest + process + export)
    run_parser = subparsers.add_parser("run", help="Ejecutar flujo completo")
    run_parser.add_argument("--input", "-i", required=True, help="Carpeta o zip de entrada")
    run_parser.add_argument("--output", "-o", required=True, help="CSV de salida")

    args = parser.parse_args()

    if args.command == "load":
        print(f"Cargando datos desde: {args.input}")
        run_migrations()
        stats = load_from_directory_or_zip(args.input, emit_sql_path=args.emit_sql)
        print(f"Completado: {stats['metricas_count']} métricas, {stats['logs_count']} logs.")
        print(f"Tenants afectados: {', '.join(stats['tenants'])}")
        if args.emit_sql:
            print(f"SQL generado en: {args.emit_sql}")

    elif args.command == "export":
        resp = export_alertas_csv(tenant=args.tenant)
        Path(args.output).write_bytes(resp.body)
        print(f"Alertas exportadas a: {args.output}")

    elif args.command == "process":
        print("Worker/Detector listo para Etapa 2.")

    elif args.command == "run":
        run_migrations()
        load_from_directory_or_zip(args.input)
        resp = export_alertas_csv()
        Path(args.output).write_bytes(resp.body)
        print(f"Proceso concluido. Alertas guardadas en: {args.output}")

if __name__ == "__main__":
    main()
