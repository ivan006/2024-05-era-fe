import { Model } from '@vuex-orm/core';
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
            'approvedBy': this.belongsTo(Entity, 'ApprovedBy'),
            'invoiceApprovedBy': this.belongsTo(Entity, 'InvoiceApprovedBy'),
            'query': this.belongsTo(Queryheader, 'Query'),
            'entity': this.belongsTo(Entity, 'Entity')
        };
    }
}