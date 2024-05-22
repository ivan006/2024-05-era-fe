import { Model, belongsTo, hasMany } from '@vuex-orm/core';
import Entity from './Entity';
import Systemuser from './Systemuser';
import Servicerequestfrequency from './Servicerequestfrequency';
import Servicerequestreport from './Servicerequestreport';

export default class Servicerequest extends Model {
    static entity = 'servicerequest';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'ServiceRequestNo': this.attr(''),
            'ServiceProvider': this.attr(''),
            'CreatedBy': this.attr(''),
            'CreatedOn': this.attr(''),
            'FromDate': this.attr(''),
            'ToDate': this.attr(''),
            'Services': this.attr(''),
            'Locations': this.attr(''),
            'Deliverables': this.attr(''),
            'DeliveryDate': this.attr(''),
            'entity': this.belongsTo(Entity),
            'systemuser': this.belongsTo(Systemuser),
            'servicerequestfrequencies': this.hasMany(Servicerequestfrequency),
            'servicerequestreports': this.hasMany(Servicerequestreport)
        };
    }
}