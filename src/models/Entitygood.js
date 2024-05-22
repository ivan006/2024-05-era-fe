import { Model } from '@vuex-orm/core';
import Entity from './Entity';
import Entitygoodapproval from './Entitygoodapproval';
import Good from './Good';

export default class Entitygood extends Model {
    static entity = 'entitygood';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Entity': this.attr(''),
            'Good': this.attr(''),
            'Units': this.attr(''),
            'AvgKg': this.attr(''),
            'AvgKgOld': this.attr(''),
            'AvgLifeSpan': this.attr(''),
            'TotalKg': this.attr(''),
            'Tariff': this.attr(''),
            'Selected': this.attr(''),
            'Dimension': this.attr(''),
            'WasteClass': this.attr(''),
            'Period': this.attr(''),
            'Invoice': this.attr(''),
            'entity': this.belongsTo(Entity, 'entity_id'),
            'entitygoodapproval': this.belongsTo(Entitygoodapproval, 'entitygoodapproval_id'),
            'good': this.belongsTo(Good, 'good_id')
        };
    }
}