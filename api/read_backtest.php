<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Metadata of the Webpage -->
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Crypto - Quant Trading" />
  <meta name="author" content="Le Ba Tien Trien">
  <!-- Favicon and Website Tittle -->
  <title>Lê Bá Tiến Triển</title>
  <link rel="shortcut icon" href="assets/img/favicon.ico" />  
  <!-- Import CSS: Main Stylesheet -->
  <!-- <link rel="stylesheet" href="assets/lib/photoswipe/photoswipe.css"> -->
  <link rel="stylesheet" href="assets/lib/bootstrap/css/bootstrap.min.css" />
  <!-- Other css files -->
  <!-- <link rel="stylesheet" href="assets/lib/highcharts/css/highcharts.css"> -->
  <!-- <link rel="stylesheet" href="assets/lib/aggrid/styles/ag-theme-quartz.min.css"> -->
  <!-- Import JS: Main Script -->
  <script src="assets/lib/aggrid/community/ag-grid-community.min.js"></script>
  
</head>

<body>
  <!-- Initial setup for responsive layout -->
  <script type="text/javascript">
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    // console.log(`Screen Width: ${width}, Height: ${height}`);
  </script>
  <div class="container-xxl">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
          Update
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
          Statistic
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
          Contact
        </button>
      </li>
      <!-- <li class="nav-item" role="presentation">
        <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled>
          Disabled
        </button>
      </li> -->
    </ul>
  </div>

  <div class="container-xxl">
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
        <!-- Tab #1 ========================== -->
        <div class="row" style="padding-top: 10px;">
          <div class="col"><img id="chart_trend" width="100%"></div>
        </div>
        <div class="row" style="padding: 10px;">
          <div class="col" style="padding-top: 2px;">
            <input type="text" id="filter-text-box" style="width: 100%;" placeholder="Search ..." oninput="onFilterTextBoxChanged()" />
          </div>
        </div>
        <div class="row" style="padding-bottom: 5px;">
          <div class="col" id="detail_coin">
            <div class="form-check form-switch" style="padding-top: 5px;">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckChecked">Good ?</label>
            </div>
          </div>
          <div class="col" style="text-align: center;">
            <button class="btn btn-outline-secondary" type="submit">Submit</button>
          </div>
          <div class="col" style="text-align: center;">
            <button class="btn btn-outline-secondary" type="submit" onclick="onBtnExport()">Export</button>
          </div>
        </div>
        <div class="row">
          <div id="grid_overall" class="ag-theme-quartz"></div>
        </div>
      </div>
      <script>
        // Select the element by its ID
        const chart_element = document.getElementById('chart_trend');
        const grid_element = document.getElementById('grid_overall');
        // Set the height of the chart and grid
        if (width > 500 ) {
          chart_element.style.minHeight = '278.5px';
          grid_element.style.height = `${height-85}px`;
        }
        else {
          chart_element.style.minHeight = '160px';
          grid_element.style.height = `${height-245}px`;
        }
        
      </script>
      <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
      <!-- Tab #2 ========================== -->
        Under development by TrienChill
      </div>

      <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
      <!-- Tab #3 ========================== -->
      Under development by TrienChill
      </div>

      <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
      <!-- Tab #4 ========================== -->
      Under development by TrienChill
      </div>
    </div>
  </div>

  
  <script type="text/javascript">
    

    function onFilterTextBoxChanged(){
      gridApi.setGridOption("quickFilterText", document.getElementById("filter-text-box").value );
    }

    function changeImage(src){
      document.getElementById('chart_trend').src = src;
    }

    function onBtnExport() {
      gridApi.exportDataAsCsv();
    }

    // Draw the Table
    let gridApi;
    const gridOptions = {
      rowData: [],
      tooltipShowDelay: 500,
      tooltipMouseTrack: true,
      columnDefs: [
      { field: "record_id", headerName: "ID", width: 70, pinned: "left"},
      { field: "coin_name", headerName: "Name",width: 115, pinned: "left", type: 'rightAligned', valueGetter: (p) => p.data.coin_name.slice(0, -4) },
      { field: "result_15", headerName: "15", width: 55, type: 'rightAligned',
        cellStyle: params => {
          if (params.value > 2) { return {backgroundColor: '#1cb848'}; }
          if (params.value > 0 & params.value <= 2) { return {backgroundColor: '#9FE2BF'}; }
          if (params.value == 0) { return {backgroundColor: '#FEF9E7'}; }
          if (params.value < 0 & params.value >= -2) { return {backgroundColor: '#fade7a'}; }
          else {return {backgroundColor: '#FFCF69'};}
        }
      },
      { field: "result_30", headerName: "30", width: 55, type: 'rightAligned', 
        cellStyle: params => {
          if (params.value > 2) { return {backgroundColor: '#1cb848'}; }
          if (params.value > 0 & params.value <= 2) { return {backgroundColor: '#9FE2BF'}; }
          if (params.value == 0) { return {backgroundColor: '#FEF9E7'}; }
          if (params.value < 0 & params.value >= -2) { return {backgroundColor: '#fade7a'}; }
          else {return {backgroundColor: '#FFCF69'};}
        }
      },
      { field: "result_45", headerName: "45", width: 55, type: 'rightAligned', 
        cellStyle: params => {
          if (params.value > 2) { return {backgroundColor: '#1cb848'}; }
          if (params.value > 0 & params.value <= 2) { return {backgroundColor: '#9FE2BF'}; }
          if (params.value == 0) { return {backgroundColor: '#FEF9E7'}; }
          if (params.value < 0 & params.value >= -2) { return {backgroundColor: '#fade7a'}; }
          else {return {backgroundColor: '#FFCF69'};}
        }
      },
      { field: "test_id", headerName:"Alpha", width:70},
      { field: "date_trigger",headerName:"DateTime", width: 120, sort: 'desc', valueGetter:(p) => 
        {
          const [date, time] = p.data.date_trigger.split(' ');
          const [year, month, day] = date.split('-');
          const [hours, minutes] = time.split(':');
          return `${day}/${month} ${hours}:${minutes}`;
        },
      },
      { field: "avg15_per", headerName:"avg15", type: 'rightAligned', width:75,
        tooltipValueGetter: (p) => "This is a dynamic tooltip using the value of " + p.value,
        cellStyle: params => {
          if (params.value > 0) { return {backgroundColor: '#9FE2BF'}; }
          else { return {backgroundColor: '#fade7a'};}
        }
      },
      { field: "min15_per", headerName:"min15", type: 'rightAligned', width:75,
        cellStyle: params => {
          if (params.value > 0) { return {backgroundColor: '#9FE2BF'}; }
          else { return {backgroundColor: '#fade7a'};}
        }
      },
      { field: "max15_per", headerName:"max15", type: 'rightAligned', width:75,
        cellStyle: params => {
          if (params.value > 0) { return {backgroundColor: '#9FE2BF'}; }
          else { return {backgroundColor: '#fade7a'};}
        }
      },
      { field: "avg30_per", headerName:"avg30", type: 'rightAligned', width:75,
        cellStyle: params => {
          if (params.value > 0) { return {backgroundColor: '#9FE2BF'}; }
          else { return {backgroundColor: '#fade7a'};}
        }
      },
      { field: "min30_per", headerName:"min30", type: 'rightAligned', width:75,
        cellStyle: params => {
          if (params.value > 0) { return {backgroundColor: '#9FE2BF'}; }
          else { return {backgroundColor: '#fade7a'};}
        }
      },
      { field: "max30_per", headerName:"max30", type: 'rightAligned', width:75,
        cellStyle: params => {
          if (params.value > 0) { return {backgroundColor: '#9FE2BF'}; }
          else { return {backgroundColor: '#fade7a'};}
        }
      },
      { field: "avg45_per", headerName:"avg45", type: 'rightAligned', width:75,
        cellStyle: params => {
          if (params.value > 0) { return {backgroundColor: '#9FE2BF'}; }
          else { return {backgroundColor: '#fade7a'};}
        }
      },
      { field: "min45_per", headerName:"min45", type: 'rightAligned', width:75,
        cellStyle: params => {
          if (params.value > 0) { return {backgroundColor: '#9FE2BF'}; }
          else { return {backgroundColor: '#fade7a'};}
        }
      },
      { field: "max45_per", headerName:"max45", type: 'rightAligned', width:75,
        cellStyle: params => {
          if (params.value > 0) { return {backgroundColor: '#9FE2BF'}; }
          else { return {backgroundColor: '#fade7a'};}
        }
      },
      { field: "trigger_note", headerName:"Note", width:500},
      ],
      // cellSelection: true,
      rowSelection: {
        mode: 'singleRow',
        checkboxes: false,
        enableClickSelection: true,
      },
      onSelectionChanged: (e) => {
        const selectedData = gridApi.getSelectedRows();
        console.log(selectedData);
        const file_name = selectedData[0].date_trigger.replace(" ", "_").replace(/:/g, "-") + '_' + selectedData[0].coin_name +'.png';
        // console.log("https://petiteo.com/crypto/"+file_name);
        changeImage("crypto/"+file_name);
      },
      // autoSizeStrategy: { type: "fitCellContents"},
      defaultColDef: {
        // flex: 1,
        // minWidth: 150,
        // filter: "agTextColumnFilter",
        suppressHeaderMenuButton: true,
        // suppressHeaderContextMenu: true,
      },
    };
    gridApi = agGrid.createGrid(document.querySelector("#grid_overall"), gridOptions);
    
    // Function to fetch data from a URL
    async function fetchData(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        // console.log(data['data']);
        gridApi.setGridOption("rowData", data['data']);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    }
    // URL to fetch data from
    const url = 'http://103.173.66.235/api/read_backtest.php?null_data=no';    
    fetchData(url);
    
  </script>

  
<!-- <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/ag-grid-community@32.3.3/dist/ag-grid-community.js?t=1731498700407"></script> -->
<!-- Includes all JS & CSS for the JavaScript Data Grid -->
<!-- <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/ag-grid-community/dist/ag-grid-community.min.js"></script> -->
<!-- Bootstrap & jQuery core JavaScript Placed at the end of the document so the pages load faster -->
<script type="text/javascript" src="assets/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- <script type="text/javascript" src="assets/lib/jquery/jquery-3.7.1.min.js"></script> -->

</body>
</html>