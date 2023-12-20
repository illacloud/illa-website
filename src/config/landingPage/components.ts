import { translate } from '@docusaurus/Translate';

export const COMPONENTS_META_INFO = {
  title: translate({
    id: 'landingPage.components.meta.title',
    message: 'ILLA Cloud Components',
  }),
  description: translate({
    id: 'landingPage.components.meta.title',
    message:
      'Learn how to use the prebuilt components to customize your app in ILLA Cloud.',
  }),
};

export const INDEX_COMPONENTS_HEADER_DATA = {
  title: translate({
    id: 'landingPage.components.headerContent.title',
    message: 'Library of built-in components',
  }),
  description: translate({
    id: 'landingPage.components.headerContent.description',
    message:
      'ILLA provides a range of commonly used front-end development components, enabling users to easily build front-end interfaces and respond to user actions and display data through simple drag-and-drop operations. Users can construct complex components such as tables, charts, forms, lists, and more through ILLA.',
  }),
  btnText: translate({
    id: 'landingPage.components.headerContent.btnText',
    message: 'Try for Free',
  }),
  name: 'components',
  leftImage:
    'https://cdn.illacloud.com/official-website/img/official-site/features/componentIndex.svg',
};

export const INDEX_COMPONENTS_CONTENT_DATA = [
  {
    title: translate({
      id: 'landingPage.components.classify.inputs.title',
      message: 'Inputs',
    }),
    contentList: [
      {
        logo: 'https://cdn.illacloud.com/official-website/img/official-site/components-new/Cover%20upload.svg',
        name: translate({
          id: 'landingPage.components.classify.inputs.upload.title',
          message: 'Upload',
        }),
        path: 'Upload',
        description: translate({
          id: 'landingPage.components.classify.inputs.upload.description',
          message:
            "The 'Upload' component in ILLA Cloud provides a way for users to upload any type of files to their application.",
        }),
      },
      {
        logo: 'https://cdn.illacloud.com/official-website/img/official-site/components-new/Cover%20Switch.svg',
        name: translate({
          id: 'landingPage.components.classify.inputs.switch.title',
          message: 'Switch',
        }),
        path: 'Switch',
        description: translate({
          id: 'landingPage.components.classify.inputs.switch.description',
          message:
            "The 'Switch' component in ILLA Cloud provides a toggle switch that allows users to turn on or turn off a particular setting or feature.",
        }),
      },
      {
        logo: 'https://cdn.illacloud.com/official-website/img/official-site/components-new/Cover%20Select.svg',
        name: translate({
          id: 'landingPage.components.classify.inputs.select.title',
          message: 'Select',
        }),
        path: 'Select',
        description: translate({
          id: 'landingPage.components.classify.inputs.select.description',
          message:
            "The 'Select' component in ILLA Cloud is a drop-down selector that allows users to choose from a list of options, providing a user-friendly and space-efficient way to input data.",
        }),
      },
      {
        logo: 'https://cdn.illacloud.com/official-website/img/official-site/components-new/Cover%20Radio%20Group.svg',
        name: translate({
          id: 'landingPage.components.classify.inputs.radioGroup.title',
          message: 'Radio group',
        }),
        path: 'Radio group',
        description: translate({
          id: 'landingPage.components.classify.inputs.radioGroup.description',
          message:
            "The 'Radio Group' component in ILLA Cloud is a radio selector that allows users to choose one option from a list of choices, providing a simple and clear way to input and manage data.",
        }),
      },
      {
        logo: 'https://cdn.illacloud.com/official-website/img/official-site/components-new/Cover%20Check%20Box.svg',
        name: translate({
          id: 'landingPage.components.classify.inputs.checkboxGroup.title',
          message: 'Checkbox Group',
        }),
        path: 'Checkbox Group',
        description: translate({
          id: 'landingPage.components.classify.inputs.checkboxGroup.description',
          message:
            "The 'Checkbox Group' component in ILLA Cloud is a checkbox selector that allows users to select multiple options from a list, providing a simple and efficient way to manage data.",
        }),
      },
    ],
  },
  {
    title: translate({
      id: 'landingPage.components.classify.data.title',
      message: 'Data',
    }),
    contentList: [
      {
        logo: 'https://cdn.illacloud.com/official-website/img/official-site/components-new/Cover%20Chart.svg',
        name: translate({
          id: 'landingPage.components.classify.inputs.chart.title',
          message: 'Chart',
        }),
        path: 'Chart',
        description: translate({
          id: 'landingPage.components.classify.inputs.chart.description',
          message:
            "The 'Chart' component in ILLA Cloud displays multiple types of charts based on linked data, providing users with clear and visually appealing representations of complex data.",
        }),
      },
      {
        logo: 'https://cdn.illacloud.com/official-website/img/official-site/components-new/Cover%20Table.svg',
        name: translate({
          id: 'landingPage.components.classify.inputs.tables.title',
          message: 'Tables',
        }),
        path: 'Tables',
        description: translate({
          id: 'landingPage.components.classify.inputs.tables.description',
          message:
            "The 'Table' component in ILLA Cloud displays data from a database in a tabular format, making it easy for users to view, sort, and analyze large amounts of information at a glance.",
        }),
      },
    ],
  },
  {
    title: translate({
      id: 'landingPage.components.classify.Presentation.title',
      message: 'Presentation',
    }),
    contentList: [
      {
        logo: 'https://cdn.illacloud.com/official-website/img/official-site/components-new/Cover%20PDF.svg',
        name: translate({
          id: 'landingPage.components.classify.inputs.pdf.title',
          message: 'PDF',
        }),
        path: 'PDF',
        description: translate({
          id: 'landingPage.components.classify.inputs.pdf.description',
          message:
            "The 'PDF' component in ILLA Cloud is a display element that allows users to view and interact with PDF files within the application.",
        }),
      },
      {
        logo: 'https://cdn.illacloud.com/official-website/img/official-site/components-new/Cover%20Video.svg',
        name: translate({
          id: 'landingPage.components.classify.inputs.video.title',
          message: 'Video',
        }),
        path: 'Video',
        description: translate({
          id: 'landingPage.components.classify.inputs.video.description',
          message:
            "The 'Video' component in ILLA Cloud is a display element that allows users to play and interact with videos within the application.",
        }),
      },
    ],
  },
];
