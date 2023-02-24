import { LightningElement ,track} from 'lwc';

export default class Project1 extends LightningElement {

 Patient ={
    pt_name :'boy',
    pt_no : 420,
    pt_age : 25
}
hospital_name = 'Appolo hospital'

acceptHname(event){
    this.hospital_name=event.target.value

}

acceptName(event){
    this.Patient.pt_name=event.target.value

}
acceptNo(event){
    this.Patient.pt_no=event.target.value

}
acceptAge(event){
    this.Patient.pt_age=event.target.value

}


}