import { Model } from '@vuex-orm/core';
import Entitygood from './Entitygood';
import Entity from './Entity';

export default class Good extends Model {
    static entity = 'good';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'HSCode': this.attr(''),
            'Description': this.attr(''),
            'EU6': this.attr(''),
            'EU10': this.attr(''),
            'UNU': this.attr(''),
            'AvgKg': this.attr(''),
            'Category': this.attr(''),
            'HazardSubstance': this.attr(''),
            'Dimension': this.attr(''),
            'Sector': this.attr(''),
            'entitygoods': this.hasMany(Entitygood, 'good_id'),
            'entity': this.belongsTo(Entity, 'entity_id')
        };
    }
}