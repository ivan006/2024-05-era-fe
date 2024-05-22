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
            'serviceRequest': this.belongsTo(Servicerequest, 'ServiceRequest'),
            'reportFrequency': this.belongsTo(Systemcode, 'ReportFrequency')
        };
    }
}