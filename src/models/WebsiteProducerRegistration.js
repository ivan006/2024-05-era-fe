import { Model } from '@vuex-orm/core';

export default class WebsiteProducerRegistration extends Model {
    static entity = 'websiteProducerRegistration';

    static fields() {
        return {
            id: this.attr(null),
            'Id': this.attr(''),
            'Data': this.attr(''),
            'ProducerId': this.attr(''),
            
        };
    }
}