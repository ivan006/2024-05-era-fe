import { Model } from '@vuex-orm/core';
import Servicerequestreport from './Servicerequestreport';

export default class Treatmentdetail extends Model {
    static entity = 'treatmentdetail';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'ServiceRequestReport': this.attr(''),
            'OpeningBalance': this.attr(''),
            'Refurbished': this.attr(''),
            'Recovered': this.attr(''),
            'Export': this.attr(''),
            'Energy': this.attr(''),
            'Landfill': this.attr(''),
            'LocalSecondaryProducts': this.attr(''),
            'servicerequestreports': this.hasMany(Servicerequestreport, 'treatmentdetail_id'),
            'servicerequestreport': this.belongsTo(Servicerequestreport, 'servicerequestreport_id')
        };
    }
}