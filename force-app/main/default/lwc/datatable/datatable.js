import { LightningElement,api,wire} from 'lwc';
import accounts from'@salesforce/apex/Account.methodName';

export default class Datatable extends LightningElement {

    @api accounts
}