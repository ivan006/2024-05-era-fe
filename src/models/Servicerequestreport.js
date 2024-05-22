import { Model, hasMany, belongsTo } from '@vuex-orm/core';
import Externalproducer from './Externalproducer';
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
            'externalproducers': this.hasMany(Externalproducer),
            'servicerequest': this.belongsTo(Servicerequest),
            'entity': this.belongsTo(Entity),
            'systemuser': this.belongsTo(Systemuser),
            'treatmentdetail': this.belongsTo(Treatmentdetail),
            'treatmentdetails': this.hasMany(Treatmentdetail)
        };
    }
}