import { Model } from '@vuex-orm/core';
import Systemcode from './Systemcode';

export default class Address extends Model {
    static entity = 'address';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'StreetNo': this.attr(''),
            'StreetName': this.attr(''),
            'Building': this.attr(''),
            'Postal': this.attr(''),
            'Suburb': this.attr(''),
            'City': this.attr(''),
            'Province': this.attr(''),
            'Country': this.attr(''),
            'PostCode': this.attr(''),
            'Type': this.attr(''),
            'Person': this.attr(''),
            'MoveDate': this.attr(''),
            'Preferred': this.attr(''),
            'Dispatch': this.attr(''),
            'Latitude': this.attr(''),
            'Longitude': this.attr(''),
            'countrySystemcode': this.belongsTo(Systemcode, 'country_systemcode_id'),
            'typeSystemcode': this.belongsTo(Systemcode, 'type_systemcode_id')
        };
    }
}