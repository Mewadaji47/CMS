import type { Schema, Attribute } from '@strapi/strapi';

export interface DescriptionDescription extends Schema.Component {
  collectionName: 'components_description_descriptions';
  info: {
    displayName: 'description';
    icon: 'archive';
  };
  attributes: {
    description: Attribute.Blocks;
  };
}

export interface ImageImage extends Schema.Component {
  collectionName: 'components_image_images';
  info: {
    displayName: 'Image';
    icon: 'landscape';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface PdfPdf extends Schema.Component {
  collectionName: 'components_pdf_pdfs';
  info: {
    displayName: 'PDF';
  };
  attributes: {
    pdf: Attribute.Media;
  };
}

export interface TextText extends Schema.Component {
  collectionName: 'components_text_texts';
  info: {
    displayName: 'text';
  };
  attributes: {};
}

export interface Text1Text1 extends Schema.Component {
  collectionName: 'components_text1_text1s';
  info: {
    displayName: 'text1';
  };
  attributes: {
    text: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'description.description': DescriptionDescription;
      'image.image': ImageImage;
      'pdf.pdf': PdfPdf;
      'text.text': TextText;
      'text1.text1': Text1Text1;
    }
  }
}
