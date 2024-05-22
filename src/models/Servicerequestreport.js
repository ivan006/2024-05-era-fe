import { Model } from '@vuex-orm/core';
import Servicerequest from './Servicerequest';
import Entity from './Entity';
import Systemuser from './Systemuser';
import Treatmentdetail from './Treatmentdetail';

export default class Servicerequestreport extends Model {
    static entity = 'servicerequestreport';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'ServiceRequest': this.attr(''),
            'ServiceProvider': this.attr(''),
            'CreatedBy': this.attr(''),
            'TreatmentDetails': this.attr(''),
            'CreatedOn': this.attr(''),
            'ReportDate': this.attr(''),
            'Approved': this.attr(''),
            'Rejected': this.attr(''),
            'serviceRequest': this.belongsTo(Servicerequest, 'ServiceRequest'),
            'serviceProvider': this.belongsTo(Entity, 'ServiceProvider'),
            'createdBy': this.belongsTo(Systemuser, 'CreatedBy'),
            'treatmentDetail': this.belongsTo(Treatmentdetail, 'TreatmentDetails')
        };
    }
}