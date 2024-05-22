import { Model } from '@vuex-orm/core';
import Servicerequest from './Servicerequest';
import Systemcode from './Systemcode';

export default class Servicerequestfrequency extends Model {
    static entity = 'servicerequestfrequency';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'ServiceRequest': this.attr(''),
            'ReportFrequency': this.attr(''),
            'Active': this.attr(''),
            'servicerequest': this.belongsTo(Servicerequest),
            'systemcode': this.belongsTo(Systemcode)
        };
    }
}