import { LightningElement, api } from 'lwc';
import getConData from '@salesforce/apex/ContactData.getConData';

 const column = 
   [
    {label : 'Name' , fieldName : 'Name'},
    {label: 'Phone', fieldName : 'Phone'},
   ]

export default class DataShowonclick extends LightningElement {


     showcon = 'Show Contact';
     isDatatableVisisble = false;
    @api recordId;
    column = column;
    SearchKey='';
    data;


  
    connectedCallback() {
      getConData({accountRecordId : this.recordId , searchValue : this.SearchKey})
      .then(result => {
          this.data=result;
          console.log('data: ' +JSON.stringify(data));

      })
      .catch(error =>{
        console.log('error: ' +JSON.stringify(error));

      })
    }  

    handleChange(event){
          this.SearchKey = event.target.value;
          console.log('this.SearchKey: ' +JSON.stringify(this.SearchKey));

          getConData({accountRecordId : this.recordId , searchValue : this.SearchKey})
      .then(result => {
          this.data=result;
          console.log('data: ' +JSON.stringify(data));

      })
      .catch(error =>{
        console.log('error: ' +JSON.stringify(error));

      })

    }

    handleclick(event) {
        const showcon = event.target.label;
        console.log('label: ' +JSON.stringify(showcon));

        if (showcon === 'Show Contact') {
            this.showcon = 'Hide Contact';
           this.isDatatableVisisble = true;
        } else {
            this.showcon = 'Show Contact';
            this.isDatatableVisisble = false;
        }
    }
}
