import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class BaseComponentviewform extends LightningElement {
    changeHandler(event){
const showmsg= new ShowToastEvent({
    title:'success',
    message:'Successfully Created',
    mode:'disabled',
    variant:'success'
})
this.dispatchEvent(showmsg)
    }
}