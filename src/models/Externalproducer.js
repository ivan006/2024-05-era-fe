import { Model, belongsTo } from '@vuex-orm/core';
import Servicerequestreport from './Servicerequestreport';

export default class Externalproducer extends Model {
    static entity = 'externalproducer';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Name': this.attr(''),
            'ServiceRequestReport': this.attr(''),
            'servicerequestreport': this.belongsTo(Servicerequestreport)
        };
    }
}