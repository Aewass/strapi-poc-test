import type { Schema, Struct } from '@strapi/strapi';

export interface CardServices extends Struct.ComponentSchema {
  collectionName: 'components_card_services';
  info: {
    description: '';
    displayName: 'SERVICES';
  };
  attributes: {
    Description: Schema.Attribute.String;
    Link: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'card.services': CardServices;
    }
  }
}
