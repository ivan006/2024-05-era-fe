import { Model } from '@vuex-orm/core';
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
            'externalproducers': this.hasMany(Externalproducer, 'servicerequestreport_id'),
            'servicerequest': this.belongsTo(Servicerequest, 'servicerequest_id'),
            'entity': this.belongsTo(Entity, 'entity_id'),
            'systemuser': this.belongsTo(Systemuser, 'systemuser_id'),
            'treatmentdetail': this.belongsTo(Treatmentdetail, 'treatmentdetail_id'),
            'treatmentdetails': this.hasMany(Treatmentdetail, 'servicerequestreport_id')
        };
    }
}