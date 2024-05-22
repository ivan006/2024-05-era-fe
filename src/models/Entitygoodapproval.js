import { Model, hasMany, belongsTo } from '@vuex-orm/core';
import Entitygood from './Entitygood';
import Entity from './Entity';
import Queryheader from './Queryheader';

export default class Entitygoodapproval extends Model {
    static entity = 'entitygoodapproval';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'ApprovedBy': this.attr(''),
            'ApprovedOn': this.attr(''),
            'InvoiceApprovedBy': this.attr(''),
            'InvoiceApprovedOn': this.attr(''),
            'Entity': this.attr(''),
            'Period': this.attr(''),
            'PurchaseOrder': this.attr(''),
            'InvoiceNo': this.attr(''),
            'UseAR': this.attr(''),
            'UseVAT': this.attr(''),
            'Query': this.attr(''),
            'Status': this.attr(''),
            'entitygoods': this.hasMany(Entitygood),
            'entity': this.belongsTo(Entity),
            'entity': this.belongsTo(Entity),
            'queryheader': this.belongsTo(Queryheader),
            'entity': this.belongsTo(Entity)
        };
    }
}