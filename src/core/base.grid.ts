import { OnInit } from '@angular/core';
import { DatePipe } from "@angular/common/common";
import { OctopusDeployApiService } from "./services/octopus-deploy.api.service";
import { TeamCityApiService } from "./services/team-city.api.service";

export abstract class BaseGrid implements OnInit {
  protected paginationPageSize = 20;
  gridOptions;
  rowData: any[];
  protected columnHeaders;
  protected gridApi;
  protected gridColumnApi;
  protected rowSelection;
  protected rowClassRules;
  protected columnsToHide: string[];

  constructor(private readonly datePipe: DatePipe) { }

  protected abstract getColumnHeaders(): any[];
  protected abstract getRowData(): void;

  ngOnInit() {
    this.baseNgOnInit();
  }

  baseNgOnInit() {
    this.setGridOptions();
    this.getRowData();
  }

  setGridOptions() {
    this.gridOptions = ({
      context: {
        componentParent: this
      },
      columnDefs: this.getColumnHeaders(),
      defaultColDef: { sortable: true, filter: true, resizable: false, minWidth: 180 },
      domLayout: 'autoHeight',
      pagination: true,
      paginationPageSize: this.paginationPageSize,
      rowSelection: this.rowSelection,
      suppressHorizontalScroll: true,
      suppressDragLeaveHidesColumns: true,
      columnTypes: {
        "idColumn": {
          colId: 'Id',
          field: 'Id',
          hide: true
        },
        "buttonColumn": {
          headerName: '',
          field: 'value',
          resizable: false,
          filter: false,
          //width: 1,
          //maxWidth: 1,
          colId: 'buttons',
          suppressSizeToFit: true,
          cellClass: ['ag-cell-actions']
        },
        "dateColumn": {
          filter: 'agDateColumnFilter',
          cellRenderer: (date) => {
            return date.value ? this.datePipe.transform(date.value, 'dd/MM/yy HH:mm') : date.value;
          }
        }
      },
      onGridReady: (event) => this.onGridReady(event),
      onGridSizeChanged: (event) => this.onGridSizeChanged(event)
    });
  }

  filterRowData(entityId) {
    return this.rowData = this.rowData.filter(s => s.id !== entityId);
  }

  hasRowData(): boolean {
    return Boolean(Array.isArray(this.rowData) && this.rowData.length);
  }

  onGridReady(params): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }

  onGridSizeChanged(event) {
    this.onBaseGridSizeChanged(event);
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  onBaseGridSizeChanged(params) {
    const gridWrapper = document.getElementById('grid-wrapper');

    if (gridWrapper) {
      const gridWidth = gridWrapper.offsetWidth;
      const columnsToShow = [];

      let colsToHide = [];
      if (this.columnsToHide != null) {
        colsToHide = this.columnsToHide;
      }

      let totalColsWidth = 0;
      const allColumns = params.columnApi.getAllColumns().filter(col => !(col.colId === 'buttons' || col.colDef.type === 'alwaysHidden'));

      for (let i = 1; i < allColumns.length; i++) {
        const column = allColumns[i];
        totalColsWidth += column.getMinWidth();

        if (totalColsWidth > gridWidth) {
          colsToHide.push(column.colId);
        } else {
          columnsToShow.push(column.colId);
        }
      }

      params.columnApi.setColumnsVisible(columnsToShow, true);
      params.columnApi.setColumnsVisible(colsToHide, false);
    } else {
      console.warn('the grid has no grid-wrapper class');
    }

    params.api.sizeColumnsToFit();
  }

  getRow(rowIndex) {
    const row = this.gridOptions.api.getRowNode(rowIndex);
    return row.data;
  }

  getRowNode(rowId) {
    return this.gridOptions.api.getRowNode(rowId);
  }

  onExport() {
    const options = {
      suppressQuotes: 'none',
      columnSeparator: ','
    };

    this.gridApi.exportDataAsCsv(options);
  }
}
