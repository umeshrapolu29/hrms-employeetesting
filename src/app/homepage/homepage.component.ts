import { Component, OnInit } from '@angular/core';
import{Chart} from 'Chart.js';
import { style } from '@angular/animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  massPopChart2:[];
  massPopChart:[];

  constructor() { }

  ngOnInit() {
    this.massPopChart = new Chart('myChart', {
      type:'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Leaves', 'leavesTaken', 'Optional Leaves'],
        datasets:[{
          label:'leaves',
          data:[
            16,
            3,
            4

           
          ],
          //backgroundColor:'green',
          backgroundColor:[
            '#1e3e72',
            '#ff4961',
            '#f8c152'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'',
          fontSize:0
          },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });

 this.massPopChart2 = new Chart('myChart2', {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','July','Aug','Sep','Oct','Nov','Dec'],
        datasets:[{
          label:'Attendance',
          data:[
           40,40,30,50,60,30,56,78,20,49,70,100
          ],
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)',
            '#1e3e72',
            'rgba(255, 159, 64)',
            'rgba(255, 99, 132)',

            
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)',
                      
            '#1e3e56',
            'rgba(255, 159, 64)',
            
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'',
          fontSize:0
        },
        legend:{
          display:false,
          position:'top',
          labels:{
          }
        },
        layout:{
        	
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });







  }

}
