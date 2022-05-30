export interface IBook {
    id: string;
    type: string;
    links: IBookLink
    attributes: IBookAttributes;
    relationships: IBookRelationships
}

export interface IBookLink {
  self: string;
}

export interface IBookAttributes {
  urn: string;
  created_at: string;
  updated_at: string;
  content: string;
  properties?: any;
  display_properties: IBookAttributesDisplayProperties;
}

export interface IBookAttributesDisplayProperties {
  type: string;
  image: string;
}
 
export interface IBookRelationships {
  authors: IBookRelationshipsLinks;
  publishers: IBookRelationshipsLinks;
}

export interface IBookRelationshipsLinks {
  links: IBookLinks;
}

export interface IBookLinks {
  self: string;
  related: string;
}