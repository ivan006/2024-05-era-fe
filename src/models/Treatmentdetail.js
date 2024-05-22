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
            'serviceRequestReport': this.belongsTo(Servicerequestreport, 'ServiceRequestReport')
        };
    }
}