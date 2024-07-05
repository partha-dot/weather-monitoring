import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subscription, switchMap, timer } from 'rxjs';
import { ApiService } from 'src/app/demo/service/api.service';
import { ProductService } from 'src/app/demo/service/product.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { AuthenticationService } from 'src/app/demo/service/authentication.service';
import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart,
    ApexAxisChartSeries,
    ApexTitleSubtitle,
    ApexDataLabels,
    ApexFill,
    ApexYAxis,
    ApexXAxis,
    ApexTooltip,
    ApexMarkers,
    ApexAnnotations,
    ApexStroke,
    ApexLegend,
    
  } from "ng-apexcharts";
import { MessagesDemoComponent } from '../alert/messagesdemo.component';
import { Router } from '@angular/router';
  
  export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
  };
  export type ChartOptions2 = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    markers: ApexMarkers;
    title: ApexTitleSubtitle;
    fill: ApexFill;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    annotations: ApexAnnotations;
    colors: any;
    toolbar: any;
  };
  export type ChartOptions3 = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    yaxis: ApexYAxis;
    fill: ApexFill;
    stroke: ApexStroke;
    markers: ApexMarkers;
    colors: string[];
  };
  export type ChartOptions5 = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    yaxis: ApexYAxis;
    colors: string[];
    legend: ApexLegend;
    fill: ApexFill;
  };
  
  export const data2 = [
    [1327359600000, 30.95],
    [1327446000000, 31.34],
    [1327532400000, 31.18],
    [1327618800000, 31.05],
    [1327878000000, 31.0],
    [1327964400000, 30.95],
    [1328050800000, 31.24],
    [1328137200000, 31.29],
    [1328223600000, 31.85],
    [1328482800000, 31.86],
    [1328569200000, 32.28],
    [1328655600000, 32.1],
    [1328742000000, 32.65],
    [1328828400000, 32.21],
    [1329087600000, 32.35],
    [1329174000000, 32.44],
    [1329260400000, 32.46],
    [1329346800000, 32.86],
    [1329433200000, 32.75],
    [1329778800000, 32.54],
    [1329865200000, 32.33],
    [1329951600000, 32.97],
    [1330038000000, 33.41],
    [1330297200000, 33.27],
    [1330383600000, 33.27],
    [1330470000000, 32.89],
    [1330556400000, 33.1],
    [1330642800000, 33.73],
    [1330902000000, 33.22],
    [1330988400000, 31.99],
    [1331074800000, 32.41],
    [1331161200000, 33.05],
    [1331247600000, 33.64],
    [1331506800000, 33.56],
    [1331593200000, 34.22],
    [1331679600000, 33.77],
    [1331766000000, 34.17],
    [1331852400000, 33.82],
    [1332111600000, 34.51],
    [1332198000000, 33.16],
    [1332284400000, 33.56],
    [1332370800000, 33.71],
    [1332457200000, 33.81],
    [1332712800000, 34.4],
    [1332799200000, 34.63],
    [1332885600000, 34.46],
    [1332972000000, 34.48],
    [1333058400000, 34.31],
    [1333317600000, 34.7],
    [1333404000000, 34.31],
    [1333490400000, 33.46],
    [1333576800000, 33.59],
    [1333922400000, 33.22],
    [1334008800000, 32.61],
    [1334095200000, 33.01],
    [1334181600000, 33.55],
    [1334268000000, 33.18],
    [1334527200000, 32.84],
    [1334613600000, 33.84],
    [1334700000000, 33.39],
    [1334786400000, 32.91],
    [1334872800000, 33.06],
    [1335132000000, 32.62],
    [1335218400000, 32.4],
    [1335304800000, 33.13],
    [1335391200000, 33.26],
    [1335477600000, 33.58],
    [1335736800000, 33.55],
    [1335823200000, 33.77],
    [1335909600000, 33.76],
    [1335996000000, 33.32],
    [1336082400000, 32.61],
    [1336341600000, 32.52],
    [1336428000000, 32.67],
    [1336514400000, 32.52],
    [1336600800000, 31.92],
    [1336687200000, 32.2],
    [1336946400000, 32.23],
    [1337032800000, 32.33],
    [1337119200000, 32.36],
    [1337205600000, 32.01],
    [1337292000000, 31.31],
    [1337551200000, 32.01],
    [1337637600000, 32.01],
    [1337724000000, 32.18],
    [1337810400000, 31.54],
    [1337896800000, 31.6],
    [1338242400000, 32.05],
    [1338328800000, 31.29],
    [1338415200000, 31.05],
    [1338501600000, 29.82],
    [1338760800000, 30.31],
    [1338847200000, 30.7],
    [1338933600000, 31.69],
    [1339020000000, 31.32],
    [1339106400000, 31.65],
    [1339365600000, 31.13],
    [1339452000000, 31.77],
    [1339538400000, 31.79],
    [1339624800000, 31.67],
    [1339711200000, 32.39],
    [1339970400000, 32.63],
    [1340056800000, 32.89],
    [1340143200000, 31.99],
    [1340229600000, 31.23],
    [1340316000000, 31.57],
    [1340575200000, 30.84],
    [1340661600000, 31.07],
    [1340748000000, 31.41],
    [1340834400000, 31.17],
    [1340920800000, 32.37],
    [1341180000000, 32.19],
    [1341266400000, 32.51],
    [1341439200000, 32.53],
    [1341525600000, 31.37],
    [1341784800000, 30.43],
    [1341871200000, 30.44],
    [1341957600000, 30.2],
    [1342044000000, 30.14],
    [1342130400000, 30.65],
    [1342389600000, 30.4],
    [1342476000000, 30.65],
    [1342562400000, 31.43],
    [1342648800000, 31.89],
    [1342735200000, 31.38],
    [1342994400000, 30.64],
    [1343080800000, 30.02],
    [1343167200000, 30.33],
    [1343253600000, 30.95],
    [1343340000000, 31.89],
    [1343599200000, 31.01],
    [1343685600000, 30.88],
    [1343772000000, 30.69],
    [1343858400000, 30.58],
    [1343944800000, 32.02],
    [1344204000000, 32.14],
    [1344290400000, 32.37],
    [1344376800000, 32.51],
    [1344463200000, 32.65],
    [1344549600000, 32.64],
    [1344808800000, 32.27],
    [1344895200000, 32.1],
    [1344981600000, 32.91],
    [1345068000000, 33.65],
    [1345154400000, 33.8],
    [1345413600000, 33.92],
    [1345500000000, 33.75],
    [1345586400000, 33.84],
    [1345672800000, 33.5],
    [1345759200000, 32.26],
    [1346018400000, 32.32],
    [1346104800000, 32.06],
    [1346191200000, 31.96],
    [1346277600000, 31.46],
    [1346364000000, 31.27],
    [1346709600000, 31.43],
    [1346796000000, 32.26],
    [1346882400000, 32.79],
    [1346968800000, 32.46],
    [1347228000000, 32.13],
    [1347314400000, 32.43],
    [1347400800000, 32.42],
    [1347487200000, 32.81],
    [1347573600000, 33.34],
    [1347832800000, 33.41],
    [1347919200000, 32.57],
    [1348005600000, 33.12],
    [1348092000000, 34.53],
    [1348178400000, 33.83],
    [1348437600000, 33.41],
    [1348524000000, 32.9],
    [1348610400000, 32.53],
    [1348696800000, 32.8],
    [1348783200000, 32.44],
    [1349042400000, 32.62],
    [1349128800000, 32.57],
    [1349215200000, 32.6],
    [1349301600000, 32.68],
    [1349388000000, 32.47],
    [1349647200000, 32.23],
    [1349733600000, 31.68],
    [1349820000000, 31.51],
    [1349906400000, 31.78],
    [1349992800000, 31.94],
    [1350252000000, 32.33],
    [1350338400000, 33.24],
    [1350424800000, 33.44],
    [1350511200000, 33.48],
    [1350597600000, 33.24],
    [1350856800000, 33.49],
    [1350943200000, 33.31],
    [1351029600000, 33.36],
    [1351116000000, 33.4],
    [1351202400000, 34.01],
    [1351638000000, 34.02],
    [1351724400000, 34.36],
    [1351810800000, 34.39],
    [1352070000000, 34.24],
    [1352156400000, 34.39],
    [1352242800000, 33.47],
    [1352329200000, 32.98],
    [1352415600000, 32.9],
    [1352674800000, 32.7],
    [1352761200000, 32.54],
    [1352847600000, 32.23],
    [1352934000000, 32.64],
    [1353020400000, 32.65],
    [1353279600000, 32.92],
    [1353366000000, 32.64],
    [1353452400000, 32.84],
    [1353625200000, 33.4],
    [1353884400000, 33.3],
    [1353970800000, 33.18],
    [1354057200000, 33.88],
    [1354143600000, 34.09],
    [1354230000000, 34.61],
    [1354489200000, 34.7],
    [1354575600000, 35.3],
    [1354662000000, 35.4],
    [1354748400000, 35.14],
    [1354834800000, 35.48],
    [1355094000000, 35.75],
    [1355180400000, 35.54],
    [1355266800000, 35.96],
    [1355353200000, 35.53],
    [1355439600000, 37.56],
    [1355698800000, 37.42],
    [1355785200000, 37.49],
    [1355871600000, 38.09],
    [1355958000000, 37.87],
    [1356044400000, 37.71],
    [1356303600000, 37.53],
    [1356476400000, 37.55],
    [1356562800000, 37.3],
    [1356649200000, 36.9],
    [1356908400000, 37.68],
    [1357081200000, 38.34],
    [1357167600000, 37.75],
    [1357254000000, 38.13],
    [1357513200000, 37.94],
    [1357599600000, 38.14],
    [1357686000000, 38.66],
    [1357772400000, 38.62],
    [1357858800000, 38.09],
    [1358118000000, 38.16],
    [1358204400000, 38.15],
    [1358290800000, 37.88],
    [1358377200000, 37.73],
    [1358463600000, 37.98],
    [1358809200000, 37.95],
    [1358895600000, 38.25],
    [1358982000000, 38.1],
    [1359068400000, 38.32],
    [1359327600000, 38.24],
    [1359414000000, 38.52],
    [1359500400000, 37.94],
    [1359586800000, 37.83],
    [1359673200000, 38.34],
    [1359932400000, 38.1],
    [1360018800000, 38.51],
    [1360105200000, 38.4],
    [1360191600000, 38.07],
    [1360278000000, 39.12],
    [1360537200000, 38.64],
    [1360623600000, 38.89],
    [1360710000000, 38.81],
    [1360796400000, 38.61],
    [1360882800000, 38.63],
    [1361228400000, 38.99],
    [1361314800000, 38.77],
    [1361401200000, 38.34],
    [1361487600000, 38.55],
    [1361746800000, 38.11],
    [1361833200000, 38.59],
    [1361919600000, 39.6]
  ];
  
@Component({
    selector:"app-chartsdemo2",
    templateUrl: './chartsdemo2.component.html',
    styleUrls:['./chartsdemo2.component.css'],
    
  providers: [MessageService, ConfirmationService, DatePipe]
})
export class ChartsDemo2Component implements OnInit, OnDestroy,AfterViewInit {
  @ViewChild(MessagesDemoComponent) msg!: MessagesDemoComponent;
    @ViewChild("chart") chart: ChartComponent;
    @ViewChild("chart2", { static: false }) chart2: ChartComponent
    public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions2>;
  public chartOptions3: Partial<ChartOptions3>;
  public chartOptions33: Partial<ChartOptions3>;
  public chartOptions4: Partial<ChartOptions3>;
  public chartOptions5: Partial<ChartOptions5>;
  public activeOptionButton = "all";
  public updateOptionsData = {
    "1m": {
      xaxis: {
        min: new Date("28 Jan 2013").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "6m": {
      xaxis: {
        min: new Date("27 Sep 2012").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "1y": {
      xaxis: {
        min: new Date("27 Feb 2012").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "1yd": {
      xaxis: {
        min: new Date("01 Jan 2013").getTime(),
        max: new Date("01 Jan 2013").getTime()
      }
    },
    all: {
      xaxis: {
        min: undefined,
        max: undefined
      }
    }
  };

 

    rpm: any;
    flow: any;
    flow2: any;

    barData: any;

    pieData: any;

    polarData: any;

    radarData: any;

    lineOptions: any;

    barOptions: any;

    pieOptions: any;

    polarOptions: any;

    donatoptions:any;

    donatdata:any;

    radarOptions: any;

    subscription: Subscription;

    selectedCountryAdvanced:any
    selectedDealer:any
    filteredCountries: any[] = [];
    filteredDealer: any[] = [];
    countries: any[] = [];
    selectedState: any = null;
    dealer!: any[];
    data1:any=[];
    cities:any=[];
    liveData:any=[];
    liveData2:any;
    currTm:any;
    currDt:any;
    flowData:any[]=[];
    flowDate:any[]=[];
    rpmData:any[]=[];
    rpmDate:any[]=[];
    user_type:any='';
    lastUpdateTime:any='';
    checked:boolean=true;
    options: any;
    options2: any;
    data: any;
    data2:any;
    selectedAlert:any
    alert_type:string=''
    client_id:number=(+localStorage.getItem('c_id'))
    cities2:any=[];
    items: MenuItem[] | undefined;
    activeItem: MenuItem | undefined;
    l_val:number=0
    cl_val:number=0
    h_val:number=0
    ch_val:number=0
    locations:any[]=[]
    loc:any={}
    spinner:boolean=false;

    loginType:string=localStorage.getItem('loginType')
    constructor(private router: Router,private datePipe: DatePipe,public layoutService: LayoutService, private authservice:AuthenticationService,
        private fb: FormBuilder,private http:HttpClient ,private productService: ProductService, 
        private messageService: MessageService, private confirmationService: ConfirmationService,private api:ApiService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(config => {
            this.initCharts();
        });
        
    }
   
   ngAfterViewInit(): void {
    this.initMap()
   }
    ngOnInit() {
      this.items = [
        { label: 'Live', icon: 'pi pi-fw pi-home',routerLink: ['/app/outlet/alert']  },
        { label: 'device Info', icon: 'pi pi-fw pi-calendar',routerLink: ['/app/outlet/alert']  },
        { label: 'Graphical View', icon: 'pi pi-fw pi-pencil',routerLink: ['/app/outlet/alert']  },
        { label: 'Create Alert', icon: 'pi pi-fw pi-file',routerLink: ['/app/outlet/alert']  },
        { label: 'Historic Data', icon: 'pi pi-fw pi-cog',routerLink: ['/app/outlet/alert']  }
      ];
      this.activeItem = this.items[0];
        debugger
        this.initCharts();
        this.getDevice();
        this.getUnit();

        // setInterval(()=>{
        //     this.currTm= ' '+ '| '+ new Date().toString().substring(16,24)+ ' '
        //     this.currDt= new Date().toString().substring(0,15)   
        //   ,1000})

        //   setInterval(() => {
        //     this.selectedDealer?.device_name ? this.getDeviceLiveData(this.selectedDealer?.device_name) : console.log('hii');
        //     this.getDevice();
        //   }, 20000);
          
         
      
    }
    initMap() {
      // Create a map centered at a specific location
      var map = new google.maps.Map(document.getElementById('map'));

      // Create a LatLngBounds object to encompass all markers
      var bounds = new google.maps.LatLngBounds();

      // Loop through each location and add a marker to the map
      this.locations.forEach(function(location) {
          var marker = new google.maps.Marker({
              position: {lat: location.lat, lng: location.lng},
              map: map,
              title: location.name,
              icon: {
                  url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF5733" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="8"/></svg>'),
                  scaledSize: new google.maps.Size(24, 24) // Size of the marker
              },
          });

          // Extend the bounds to include this marker's position
          bounds.extend(marker.getPosition());
      });

      // Fit the map to the bounds
      map.fitBounds(bounds);
    
    }
    convertToISTDateTime(utcDatetime: string) {
      const utcDateTime = new Date(utcDatetime);
      const istTime = this.datePipe.transform(utcDateTime, 'dd-MM-yyyy HH:mm:ss', '+0530');
      return istTime || '';
    }
    ggg(){
      debugger
    }
    getUnit(){
      const apiUrl = this.api.baseUrl;
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
        this.spinner=true;
        this.http.post(apiUrl+'/client/unit/list', { headers }).subscribe(
            (response) => {
              this.spinner=false;
              console.log(response);
              const units:any=response;
              this.cities2=units.data;
              debugger
            },
            (error) => { 
        if(error.status=='401'){
          this.router.navigate(['/']);
          debugger
         }
        console.log(error.status);
              this.spinner=false;
              console.error(error);
            }
          );
      }
    abc(){
        // this.alert_type=''
        // console.log(this.selectedAlert);
        // this.alert_type=this.selectedAlert?.unit_name
        // this.alert_type=' '+this.alert_type;
        debugger
        if(this.data2){
          this.l_val=0
          this.cl_val=0
          this.h_val=0
          this.ch_val=0
          this.data2.forEach(element => {
            if(element.alert_type=="4CH" && element.unit_id==this.selectedAlert?.unit_id)
              {
                this.ch_val=element.alert
              }
              if(element.alert_type=="3H" && element.unit_id==this.selectedAlert?.unit_id)
                {
                  this.h_val=element.alert
                }
                if(element.alert_type=="2L" && element.unit_id==this.selectedAlert?.unit_id)
                  {
                    this.l_val=element.alert
                  }
                  if(element.alert_type=="1CL" && element.unit_id==this.selectedAlert?.unit_id)
                    {
                      this.cl_val=element.alert
                    }
          });
        }
      }
    getDevice(){
        const credentials = {
            client_id:this.client_id
          };
    const apiUrl = this.api.baseUrl;
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
  this.spinner=true;
  this.http.post(apiUrl+'/client/devices/list', credentials,{ headers }).subscribe(
      (response) => {
        this.spinner=false;
        console.log(response);
        
        this.data1=response
        this.cities=this.data1.data 
        this.selectedDealer=this.cities[0]
        this.getDeviceLiveData(this.selectedDealer.device,this.selectedDealer.device_id);

      },
      (error) => { 
        if(error.status=='401'){
          this.router.navigate(['/']);
          debugger
         }
        console.log(error.status);
        this.spinner=false;
        console.error(error);
      }
    );
}

dateConvt(timestamp:any){
const dateObject = new Date(timestamp);

// Extract month and day
const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1
const day = String(dateObject.getDate()).padStart(2, '0');

// Create the desired format
const result = `${month}/${day}`;

console.log(result); 
return result
}
getDeviceLiveData(name:any,id:any){
    // const apiUrl = this.api.baseUrl;
//   baseUrl = 'https://iot.wrongcode.in/backend/api';

  debugger
         if(name){
            const token = localStorage.getItem('token');
            const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
            
            this.liveData=[];
            this.liveData2=null;
    
            const credentials = {
              client_id:this.client_id,
                device_id:id,
                device:name
            };
            this.data1=[];
            this.spinner=true;
            this.http.post(this.api.baseUrl+'/client/devices/device_info', credentials, { headers }).subscribe(
                (response) => {
                  this.spinner=false;
                    console.log(response);
                    const res:any=response
                    const res2=res.data
                    this.data1=res2.data
                    this.data2=res2.data2
                    if(this.data1){
                      this.loc={lat:0, lng:0, name:""}
                      this.loc.lat=(+this.data1.lat);
                      this.loc.lng=(+this.data1.lon);
                      this.loc.name="Kolkata"
                      console.log(this.loc);
                      this.locations.push(this.loc)
                      if(this.locations.length>0){
                        this.initMap();
                        console.log(this.locations);
                        debugger
                      }
                     
                      
                      debugger
                    }
                   
                    // if(this.data1) {
                    //     this.flowDate=[]
                    //     this.flowData=[]
                    //     this.rpmDate=[]
                    //     this.rpmData=[]
                    //     this.liveData=this.data1.chart_data_list
                    //     this.liveData2=this.data1.device_data_list
                    //     this.liveData.forEach(e => {
                            
                    //         this.flowDate.push(this.dateConvt(e.created_at))
                    //         this.flowData.push(e.flow)
                    //         this.rpmDate.push(this.dateConvt(e.created_at))
                    //         this.rpmData.push(e.rpm.toString())

                            
                    //         console.log(this.flowDate);
                    //         console.log(this.flowData);
                    //         console.log(this.rpmDate);
                    //         console.log(this.rpmData);
                            
                    //     });
                        
                    //     if(this.flowDate && this.flowData && this.rpmDate && this.rpmData){
                    //         this.lastUpdateTime=''
                    //         this.lastUpdateTime=this.convertToISTDateTime(this.liveData2.created_at)
                    //         console.log(this.lastUpdateTime);
                    //         var currentdate = new Date(); 
                    //         var datetime = currentdate.getDate() + "-"
                    //             + (currentdate.getMonth()+1)  + "-" 
                    //             + currentdate.getFullYear() + " "  
                    //             + currentdate.getHours() + ":"  
                    //             + currentdate.getMinutes() + ":" 
                    //             + currentdate.getSeconds();
                    //             console.log(datetime);
                                
                            
                    //         // this.flowDate = this.flowDate.map(value => JSON.stringify(value).replace(/[{}]/g, ''));
                    //         // this.flowData = this.flowData.map(value => JSON.stringify(value).replace(/[{}]/g, ''));
                    //         // this.rpmDate = this.rpmDate.map(value => JSON.stringify(value).replace(/[{}]/g, ''));
                    //         // this.rpmData = this.rpmData.map(value => JSON.stringify(value).replace(/[{}]/g, ''));
                            
                    //         this.initCharts();
                            
                    //     }
                        
                    // }
                   
                    
                },
                (error) => { 
        if(error.status=='401'){
          this.router.navigate(['/']);
          debugger
         }
        console.log(error.status);
                    console.error(error);
                }
                );
         }
  
}
        dateChange(i:any){
            const utcTimestamp = i;

            // Convert UTC timestamp to Date object
            const date = new Date(this.liveData2.created_at);

            // Set the desired timezone (in this case, +05:30)
            const timeZone = "Asia/Kolkata"; // Time zone identifier for Indian Standard Time

            // Options for formatting
            const options:any = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false, // 24-hour format
            timeZone: timeZone,
            };

            // Format the date
            const formattedDate = date.toLocaleString('en-US', options);

            console.log(formattedDate); 
            return formattedDate
        }
    setDevice(){
      this.l_val=0
      this.cl_val=0
      this.h_val=0
      this.ch_val=0
      this.cities2=[];
      this.data2=[];
      this.data1=[];
      this.locations=[];
        console.log(this.selectedDealer);
        debugger
        this.getDeviceLiveData(this.selectedDealer.device,this.selectedDealer.device_id);
        this.getUnit();
        
    }
    filterDealer(event: any) {
        const filtered: any[] = [];
        const query = event.query;
        for (let i = 0; i < this.cities.length; i++) {
            const dealer = this.cities[i];
            if (dealer.device.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(dealer);
                
            }
        }
  
        this.filteredDealer = filtered;
        
    }

    initCharts() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type: 'line',
                    label: 'Phase-1',
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    data: [50, 25, 12, 48, 56, 76, 42]
                },
                {
                    type: 'bar',
                    label: 'Phase-2',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [21, 84, 24, 75, 37, 65, 34],
                    borderColor: 'white',
                    borderWidth: 2
                },
                {
                    type: 'bar',
                    label: 'Phase-3',
                    backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                    data: [41, 52, 24, 74, 23, 21, 32]
                }
            ]
        };
        
        this.options2 = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
    
        this.options = {
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    

        this.flow = {
            labels: ['01', '02', '03', '04', '05', '06', '07'],
            datasets: [
                {
                    label: 'Last 6 Days',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--primary-500'),
                    borderColor: documentStyle.getPropertyValue('--primary-500'),
                    tension: .4
                },
                {
                    label: 'Last Week',
                    data: [28, 48, 60, 70, 66, 69, 60],
                    fill: false,
                    backgroundColor:'yellow',
                    borderColor: 'yellow',
                    tension: .4
                }
            ]

        };
        this.flow2 = {
            labels: ['01', '02', '03', '04', '05', '06', '07'],
            datasets: [
                {
                    label: 'Last 6 Days',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--primary-500'),
                    borderColor: documentStyle.getPropertyValue('--primary-500'),
                    tension: .4
                },
                {
                    label: 'Last Week',
                    data: [55, 66, 70, 90, 48, 69, 30],
                    fill: false,
                    backgroundColor:'yellow',
                    borderColor: 'yellow',
                    tension: .4
                }
            ]

        };
        this.barData = {
            labels: ['01', '02', '03', '04', '05', '06', '07'],
            datasets: [
                {
                    label: 'Last 6 Days',
                    backgroundColor: documentStyle.getPropertyValue('--primary-500'),
                    borderColor: documentStyle.getPropertyValue('--primary-500'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Last Week',
                    backgroundColor: 'yellow',
                    borderColor: 'yellow',
                    data: [28, 48, 40, 19, 86, 27, 80]
                }
            ]
        };

        this.barOptions = {
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
            }
        };

        
        this.rpm = {
            
            labels: this.rpmDate,
            datasets: [
                
                {
                    label: 'RPM',
                    data: this.rpmData,
                    fill: false,
                    backgroundColor:'yellow',
                    borderColor: 'yellow',
                    tension: .4
                }
            ]
        };
        this.lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
            }
        };
         this.lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
            }
        }
        this.pieData = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--indigo-500'),
                        documentStyle.getPropertyValue('--purple-500'),
                        documentStyle.getPropertyValue('--teal-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--indigo-400'),
                        documentStyle.getPropertyValue('--purple-400'),
                        documentStyle.getPropertyValue('--teal-400')
                    ]
                }]
        };
         this.pieData = {
            labels: ['Sun', 'Mon', 'Tue','Wed','Thu','Fri','Sat'],
            datasets: [
                {
                    data: [540, 325, 702,540, 325, 702,300],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--purple-500'),
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--indigo-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--teal-500'),
                        documentStyle.getPropertyValue('--orange-500'),
                        documentStyle.getPropertyValue('--blue-500')

                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--purple-500'),
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--indigo-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--teal-500'),
                        documentStyle.getPropertyValue('--orange-500'),
                        documentStyle.getPropertyValue('--blue-500')
                    ]
                }]
        };

this.polarData = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    35
                ],
                backgroundColor: [
                    documentStyle.getPropertyValue('--indigo-500'),
                    documentStyle.getPropertyValue('--purple-500'),
                    documentStyle.getPropertyValue('--teal-500'),
                    documentStyle.getPropertyValue('--orange-500')
                ],
                label: 'This week'
            }],
            labels: [
                'Today',
                'Yesterday',
                'Day befor tomorrow ',
                'Last Week'
            ]
        };

        this.polarOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
        this.donatoptions = {
            cutout: '60%',
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            }
        };
        this.donatdata = {
            labels: ['Sun', 'Mon', 'Tue','Wed','Thu','Fri','Sat'],
            datasets: [
                {
                    data: [540, 325, 702,540, 325, 702,300],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--purple-500'),
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--indigo-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--teal-500'),
                        documentStyle.getPropertyValue('--orange-500'),
                        documentStyle.getPropertyValue('--blue-500')
    
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--purple-500'),
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--indigo-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--teal-500'),
                        documentStyle.getPropertyValue('--orange-500'),
                        documentStyle.getPropertyValue('--blue-500')
                    ]
                    }
            ]
        };

        this.chartOptions = {
            series: [44, 55, 13, 43, 22, 34, 65],
            chart: {
              width: 480,
              type: "pie"
            },
            labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            
          };

         
            this.chartOptions2 = {
              series: [
                {
                  data: data2
                }
              ],
              chart: {
                type: "area",
                height: 350
              },
              annotations: {
                yaxis: [
                  {
                    y: 30,
                    borderColor: "#999",
                    label: {
                      text: "Support",
                      style: {
                        color: "#fff",
                        background: "#00E396"
                      }
                    }
                  }
                ],
                xaxis: [
                  {
                    x: new Date("14 Nov 2012").getTime(),
                    borderColor: "#999",
                    label: {
                      text: "Rally",
                      style: {
                        color: "#fff",
                        background: "#775DD0"
                      }
                    }
                  }
                ]
              },
              dataLabels: {
                enabled: false
              },
              markers: {
                size: 0
              },
              xaxis: {
                type: "datetime",
                min: new Date("01 Mar 2012").getTime(),
                tickAmount: 6
              },
              tooltip: {
                x: {
                  format: "dd MMM yyyy"
                }
              },
              fill: {
                type: "gradient",
                gradient: {
                  shadeIntensity: 1,
                  opacityFrom: 0.7,
                  opacityTo: 0.9,
                  stops: [0, 100]
                }
              }
            };

            this.chartOptions3 = {
                series: [
                  {
                    name: "Voltage",
                    data: this.generateDayWiseTimeSeries(
                      new Date("11 Feb 2017").getTime(),
                      185,
                      {
                        min: 30,
                        max: 90
                      }
                    )
                  }
                ],
                chart: {
                  id: "chart2",
                  type: "line",
                  height: 230,
                  toolbar: {
                    autoSelected: "pan",
                    show: false
                  }
                },
                colors: ["#546E7A"],
                stroke: {
                  width: 3
                },
                dataLabels: {
                  enabled: false
                },
                fill: {
                  opacity: 1
                },
                markers: {
                  size: 0
                },
                xaxis: {
                  type: "datetime"
                }
              };
              this.chartOptions33 = {
                series: [
                  {
                    name: "Voltage",
                    data: this.generateDayWiseTimeSeries(
                      new Date("11 Feb 2017").getTime(),
                      185,
                      {
                        min: 30,
                        max: 90
                      }
                    )
                  }
                ],
                chart: {
                  id: "chart2",
                  type: "line",
                  height: 230,
                  toolbar: {
                    autoSelected: "pan",
                    show: false
                  }
                },
                colors: ["#A32409"],
                stroke: {
                  width: 3
                },
                dataLabels: {
                  enabled: false
                },
                fill: {
                  opacity: 1
                },
                markers: {
                  size: 0
                },
                xaxis: {
                  type: "datetime"
                }
              };
              this.chartOptions4 = {
                series: [
                  {
                    name: "series1",
                    data: this.generateDayWiseTimeSeries(
                      new Date("11 Feb 2017").getTime(),
                      185,
                      {
                        min: 30,
                        max: 90
                      }
                    )
                  }
                ],
                chart: {
                  id: "chart1",
                  height: 130,
                  type: "area",
                  brush: {
                    target: "chart2",
                    enabled: true
                  },
                  selection: {
                    enabled: true,
                    xaxis: {
                      min: new Date("19 feb 2017").getTime(),
                      max: new Date("14 Jun 2017").getTime()
                    }
                  }
                },
                colors: ["#008FKW"],
                fill: {
                  type: "gradient",
                  gradient: {
                    opacityFrom: 0.91,
                    opacityTo: 0.1
                  }
                },
                xaxis: {
                  type: "datetime",
                  tooltip: {
                    enabled: false
                  }
                },
                yaxis: {
                  tickAmount: 2
                }
              }
              
              this.chartOptions5 = {
                series: [
                  {
                    name: "Voltage",
                    data: this.generateDayWiseTimeSeries(
                      new Date("11 Feb 2017 GMT").getTime(),
                      20,
                      {
                        min: 10,
                        max: 60
                      }
                    )
                  },
                  {
                    name: "Power",
                    data: this.generateDayWiseTimeSeries(
                      new Date("11 Feb 2017 GMT").getTime(),
                      20,
                      {
                        min: 10,
                        max: 20
                      }
                    )
                  },
                  {
                    name: "Current",
                    data: this.generateDayWiseTimeSeries(
                      new Date("11 Feb 2017 GMT").getTime(),
                      20,
                      {
                        min: 10,
                        max: 15
                      }
                    )
                  }
                ],
                chart: {
                  type: "area",
                  height: 350,
                  stacked: true,
                  events: {
                    selection: function(chart, e) {
                      console.log(new Date(e.xaxis.min));
                    }
                  }
                },
                colors: ["#008FFB", "#00E396", "#CED4DC"],
                dataLabels: {
                  enabled: false
                },
                fill: {
                  type: "gradient",
                  gradient: {
                    opacityFrom: 0.6,
                    opacityTo: 0.8
                  }
                },
                legend: {
                  position: "top",
                  horizontalAlign: "left"
                },
                xaxis: {
                  type: "datetime"
                }
              };
              
    }

    public updateOptions(option: any): void {
        this.activeOptionButton = option;
        this.chart2.updateOptions(this.updateOptionsData[option], false, true, true);
      }

    public generateDayWiseTimeSeries(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
          var x = baseval;
          var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    
          series.push([x, y]);
          baseval += 86400000;
          i++;
        }
        return series;
      }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    
}
