import React, {Component} from 'react';

import './VarietiesTable.css'
class VarietiesTable extends Component {
    constructor(props){
      super(props)
      this.state ={
        tableData:[
          {SpecialDesignation:"Junmai Daiginjō-shu (純米大吟醸酒, Pure rice, Very Special brew)",
           Ingredients:"Rice, Kōji rice",
           RicePolishingRatio:"Below 50%",
           PercentageOfKōjiRice:"At least 15%",
         },
         {SpecialDesignation:"Daiginjō-shu (大吟醸酒, Very Special brew)",
          Ingredients:"Rice, Kōji rice, alcohol",
          RicePolishingRatio:"Below 50%",
          PercentageOfKōjiRice:"At least 15%",
        },
        {SpecialDesignation:"Junmai Ginjō-shu (純米吟醸酒, Pure rice, Special brew)",
         Ingredients:"Rice, Kōji rice",
         RicePolishingRatio:"Below 60%",
         PercentageOfKōjiRice:"At least 15%",
       },
       {SpecialDesignation:"Ginjō-shu (吟醸酒, Special brew)",
        Ingredients:"Rice, Kōji rice, alcohol",
        RicePolishingRatio:"Below 60%",
        PercentageOfKōjiRice:"At least 15%",
      },
      {SpecialDesignation:"Tokubetsu Junmai-shu (特別純米酒, Special Pure rice)",
       Ingredients:"Rice, Kōji rice",
       RicePolishingRatio:"Below 60%",
       PercentageOfKōjiRice:"At least 15%",
     },
     {SpecialDesignation:"Tokubetsu Honjōzō-shu (特別本醸造酒, Special Genuine brew)",
      Ingredients:"Rice, Kōji rice, alcohol",
      RicePolishingRatio:"Below 60%",
      PercentageOfKōjiRice:"At least 15%",
    },

        ]
      }
    }

render(){
  return(
    <div>
       <ul className="table-header clearfix">
          <li className="table-heading">
             Special Designation
          </li>
          <li className="table-heading">
            Ingredients
          </li>
          <li className="table-heading">
             Rice Polishing Ratio
          </li>
          <li className="table-heading">
           Percentage of Kōji rice
          </li>

              <ul className="table-data-itmes clearfix">
              {
                this.state.tableData.map((tableRow,i)=>
                  <li  key={i} className="table-items">
                     {tableRow.SpecialDesignation}
                  </li>
                )
              }
              {
                this.state.tableData.map((tableRow,i)=>
                  <li  key={i} className="table-items">
                     {tableRow.Ingredients}
                  </li>
                )
              }
              {
                this.state.tableData.map((tableRow,i)=>
                  <li  key={i} className="table-items">
                     {tableRow.RicePolishingRatio}
                  </li>
                )
              }
              {
                this.state.tableData.map((tableRow,i)=>
                  <li  key={i} className="table-items">
                     {tableRow.PercentageOfKōjiRice}
                  </li>
                )
              }

              </ul>

       </ul>
    </div>
  )
}


}

export default VarietiesTable;
