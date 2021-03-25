import React, { useState } from "react";
import { Fragment } from "react";
import { Row } from "reactstrap";
import { Tab, Tabs, Typography } from "@material-ui/core";
import ImageListView from "../../../../Components/List/ImageListView/ImageListView";
import ThumbListView from "../../../../Components/List/ThumbListView/ThumbListView";
import * as BsIcons from "react-icons/bs";
import "./AllProductsPage.css";
import ListPageHeading from "../../../../Components/List/ListPageHeading/ListPageHeading";
import { Separator } from "../../../../Components/CustomBootstrap/CustomBootstrap";
const productArray = [
  {
    id: 1,
    name: "Coffret pour corps",
    price: "189.00 د.ت",
    status: "En stock",
    img: "http://localhost/tresors/inyrdeds/2020/12/8.jpg",
    category: "Coffrets,",
  },
  {
    id: 5,
    name: "PLAISIR ORIENTAL",
    price: "27.00 TND",
    status: "En stock",
    img:
      "http://localhost/tresors/inyrdeds/2020/10/tresors_naturel_0000s_0001_DSC_6872.jpg",
    category: "PARFUMS, PARFUMS D'AMBIANCE",
  },
  {
    id: 2,
    name: "Coffret pour corps",
    price: "189.00 د.ت",
    status: "En stock",
    img: "http://localhost/tresors/inyrdeds/2020/12/8.jpg",
    category: "Coffrets,",
  },
  {
    id: 3,
    name: "Coffret pour corps",
    price: "189.00 د.ت",
    status: "En stock",
    img: "http://localhost/tresors/inyrdeds/2020/12/8.jpg",
    category: "Coffrets,",
  },
  {
    id: 4,
    name: "PLAISIR ORIENTAL",
    price: "27.00 TND",
    status: "En stock",
    img:
      "http://localhost/tresors/inyrdeds/2020/10/tresors_naturel_0000s_0001_DSC_6872.jpg",
    category: "PARFUMS, PARFUMS D'AMBIANCE",
  },
];

const productArray2 = [
  {
    id: 8253,
    name: "Historica -voyage oriental",
    slug: "historica-voyage-oriental",
    permalink:
      "https://laboratoiretresorsnaturels.tn/product/historica-voyage-oriental/",
    date_created: "2021-03-16T08:37:56",
    date_created_gmt: "2021-03-16T07:37:56",
    date_modified: "2021-03-18T11:02:36",
    date_modified_gmt: "2021-03-18T10:02:36",
    type: "simple",
    status: "publish",
    featured: false,
    catalog_visibility: "visible",
    description:
      "<p>Rare ,exotique ,distinctif !</p>\n<p>Historica est l'un des parfums les plus précieux dans l'arsenal de la parfumerie.</p>\n<p>Sa composition captieuse évoque le sentiment d'originalité et de luxe tout en ajoutant de la chaleur et de la sensualité!</p>\n",
    short_description: "<p>30 ml</p>\n",
    sku: "",
    price: "70",
    regular_price: "70",
    sale_price: "",
    date_on_sale_from: null,
    date_on_sale_from_gmt: null,
    date_on_sale_to: null,
    date_on_sale_to_gmt: null,
    price_html:
      '<span class="woocommerce-Price-amount amount">70.00&nbsp;<span class="woocommerce-Price-currencySymbol">TND</span></span>',
    on_sale: false,
    purchasable: true,
    total_sales: 4,
    virtual: false,
    downloadable: false,
    downloads: [],
    download_limit: -1,
    download_expiry: -1,
    external_url: "",
    button_text: "",
    tax_status: "taxable",
    tax_class: "",
    manage_stock: false,
    stock_quantity: null,
    stock_status: "instock",
    backorders: "no",
    backorders_allowed: false,
    backordered: false,
    sold_individually: false,
    weight: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
    shipping_required: true,
    shipping_taxable: true,
    shipping_class: "",
    shipping_class_id: 0,
    reviews_allowed: false,
    average_rating: "0.00",
    rating_count: 0,
    related_ids: [5482, 5472, 6798, 5474, 6792],
    upsell_ids: [],
    cross_sell_ids: [],
    parent_id: 0,
    purchase_note: "",
    categories: [
      {
        id: 168,
        name: "nouveauté",
        slug: "nouveaute",
      },
      {
        id: 162,
        name: "Parfums",
        slug: "belle",
      },
    ],
    tags: [],
    images: [
      {
        id: 8255,
        date_created: "2021-03-16T09:21:34",
        date_created_gmt: "2021-03-16T07:21:34",
        date_modified: "2021-03-16T09:21:34",
        date_modified_gmt: "2021-03-16T07:21:34",
        src:
          "https://laboratoiretresorsnaturels.tn/inyrdeds/2021/03/DSC_5844-scaled.jpg",
        name: "DSC_5844",
        alt: "",
      },
      {
        id: 8255,
        date_created: "2021-03-16T09:21:34",
        date_created_gmt: "2021-03-16T07:21:34",
        date_modified: "2021-03-16T09:21:34",
        date_modified_gmt: "2021-03-16T07:21:34",
        src:
          "https://laboratoiretresorsnaturels.tn/inyrdeds/2021/03/DSC_5844-scaled.jpg",
        name: "DSC_5844",
        alt: "",
      },
      {
        id: 8293,
        date_created: "2021-03-18T12:02:09",
        date_created_gmt: "2021-03-18T10:02:09",
        date_modified: "2021-03-18T12:02:09",
        date_modified_gmt: "2021-03-18T10:02:09",
        src:
          "https://laboratoiretresorsnaturels.tn/inyrdeds/2021/03/DSC_8666-scaled.jpg",
        name: "DSC_8666",
        alt: "",
      },
    ],
    attributes: [],
    default_attributes: [],
    variations: [],
    grouped_products: [],
    menu_order: 0,
    meta_data: [
      {
        id: 181276,
        key: "inline_featured_image",
        value: "0",
      },
      {
        id: 181282,
        key: "mkdf_show_new_sign_woo_meta",
        value: "no",
      },
      {
        id: 181283,
        key: "_wfg_single_gift_allowed",
        value: "1",
      },
      {
        id: 181300,
        key: "slide_template",
        value: "",
      },
      {
        id: 181301,
        key: "rs_page_bg_color",
        value: "",
      },
    ],
    _links: {
      self: [
        {
          href:
            "https://laboratoiretresorsnaturels.tn/wp-json/wc/v3/products/8253",
        },
      ],
      collection: [
        {
          href: "https://laboratoiretresorsnaturels.tn/wp-json/wc/v3/products",
        },
      ],
    },
  },
  {
    id: 8072,
    name: "Eau Florale de Rose",
    slug: "eau-florale-de-rose",
    permalink:
      "https://laboratoiretresorsnaturels.tn/product/eau-florale-de-rose/",
    date_created: "2021-03-09T09:41:56",
    date_created_gmt: "2021-03-09T08:41:56",
    date_modified: "2021-03-09T09:41:56",
    date_modified_gmt: "2021-03-09T08:41:56",
    type: "variable",
    status: "publish",
    featured: false,
    catalog_visibility: "visible",
    description:
      "<p>Eau florale de rose idéale pour tous types de peaux,  adoucissante et apaisante.</p>\n<p>Anti-âge, tonique et fortifiante, elle aide à redonner éclat et souplesse à votre peau.</p>\n<h4><strong>Conseils d'utilisation :</strong></h4>\n<p>Vaporisez sur le visage matin et ou soir sans rincer.</p>\n<p>Gardez au réfrigérateur</p>\n",
    short_description: "",
    sku: "",
    price: "8",
    regular_price: "",
    sale_price: "",
    date_on_sale_from: null,
    date_on_sale_from_gmt: null,
    date_on_sale_to: null,
    date_on_sale_to_gmt: null,
    price_html:
      '<span class="woocommerce-Price-amount amount">8.00&nbsp;<span class="woocommerce-Price-currencySymbol">TND</span></span> &ndash; <span class="woocommerce-Price-amount amount">11.00&nbsp;<span class="woocommerce-Price-currencySymbol">TND</span></span>',
    on_sale: false,
    purchasable: true,
    total_sales: 15,
    virtual: false,
    downloadable: false,
    downloads: [],
    download_limit: -1,
    download_expiry: -1,
    external_url: "",
    button_text: "",
    tax_status: "taxable",
    tax_class: "",
    manage_stock: false,
    stock_quantity: null,
    stock_status: "instock",
    backorders: "no",
    backorders_allowed: false,
    backordered: false,
    sold_individually: false,
    weight: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
    shipping_required: true,
    shipping_taxable: true,
    shipping_class: "",
    shipping_class_id: 0,
    reviews_allowed: false,
    average_rating: "0.00",
    rating_count: 0,
    related_ids: [4011, 3785, 4025, 4013, 3783],
    upsell_ids: [],
    cross_sell_ids: [],
    parent_id: 0,
    purchase_note: "",
    categories: [
      {
        id: 120,
        name: "Huiles &amp; hydrolats",
        slug: "huiles-hydrolats",
      },
      {
        id: 122,
        name: "Les hydrolats",
        slug: "les-hydrolats",
      },
    ],
    tags: [],
    images: [
      {
        id: 3773,
        date_created: "2020-08-13T17:04:23",
        date_created_gmt: "2020-08-13T14:04:23",
        date_modified: "2020-08-25T13:09:47",
        date_modified_gmt: "2020-08-25T10:09:47",
        src:
          "https://laboratoiretresorsnaturels.tn/inyrdeds/2020/08/0000s_0011_eau-de-rose.jpg",
        name: "0000s_0011_eau-de-rose",
        alt: "",
      },
    ],
    attributes: [
      {
        id: 0,
        name: "Contenance",
        position: 0,
        visible: true,
        variation: true,
        options: ["100ml", "170ml"],
      },
    ],
    default_attributes: [],
    variations: [8073, 8074],
    grouped_products: [],
    menu_order: 0,
    meta_data: [
      {
        id: 171083,
        key: "inline_featured_image",
        value: "0",
      },
      {
        id: 171616,
        key: "mkdf_show_new_sign_woo_meta",
        value: "no",
      },
      {
        id: 171617,
        key: "_wfg_single_gift_allowed",
        value: "1",
      },
      {
        id: 171618,
        key: "slide_template",
        value: "",
      },
      {
        id: 171619,
        key: "rs_page_bg_color",
        value: "",
      },
    ],
    _links: {
      self: [
        {
          href:
            "https://laboratoiretresorsnaturels.tn/wp-json/wc/v3/products/8072",
        },
      ],
      collection: [
        {
          href: "https://laboratoiretresorsnaturels.tn/wp-json/wc/v3/products",
        },
      ],
    },
  },
  {
    id: 7922,
    name: "Pack cheveux - Moelle de Bœuf",
    slug: "pack-cheveux-moelle-de-boeuf",
    permalink:
      "https://laboratoiretresorsnaturels.tn/product/pack-cheveux-moelle-de-boeuf/",
    date_created: "2021-03-01T15:39:23",
    date_created_gmt: "2021-03-01T14:39:23",
    date_modified: "2021-03-17T13:08:39",
    date_modified_gmt: "2021-03-17T12:08:39",
    type: "simple",
    status: "publish",
    featured: false,
    catalog_visibility: "visible",
    description: "",
    short_description: "",
    sku: "",
    price: "213",
    regular_price: "213",
    sale_price: "",
    date_on_sale_from: null,
    date_on_sale_from_gmt: null,
    date_on_sale_to: null,
    date_on_sale_to_gmt: null,
    price_html:
      '<del><span class="woocommerce-Price-amount amount">213.00&nbsp;<span class="woocommerce-Price-currencySymbol">TND</span></span></del>&nbsp;<ins><span class="woocommerce-Price-amount amount">170.40&nbsp;<span class="woocommerce-Price-currencySymbol">TND</span></span></ins>',
    on_sale: true,
    purchasable: true,
    total_sales: 23,
    virtual: false,
    downloadable: false,
    downloads: [],
    download_limit: -1,
    download_expiry: -1,
    external_url: "",
    button_text: "",
    tax_status: "taxable",
    tax_class: "",
    manage_stock: false,
    stock_quantity: null,
    stock_status: "instock",
    backorders: "no",
    backorders_allowed: false,
    backordered: false,
    sold_individually: false,
    weight: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
    shipping_required: true,
    shipping_taxable: true,
    shipping_class: "",
    shipping_class_id: 0,
    reviews_allowed: false,
    average_rating: "0.00",
    rating_count: 0,
    related_ids: [6641, 7315, 4552, 7322, 6643],
    upsell_ids: [],
    cross_sell_ids: [],
    parent_id: 0,
    purchase_note: "",
    categories: [
      {
        id: 116,
        name: "Coffrets",
        slug: "coffret",
      },
      {
        id: 115,
        name: "Packs &amp; coffrets",
        slug: "packs-coffrets",
      },
    ],
    tags: [],
    images: [
      {
        id: 7923,
        date_created: "2021-03-01T16:38:27",
        date_created_gmt: "2021-03-01T14:38:27",
        date_modified: "2021-03-01T16:38:27",
        date_modified_gmt: "2021-03-01T14:38:27",
        src: "https://laboratoiretresorsnaturels.tn/inyrdeds/2021/03/pack.jpg",
        name: "pack",
        alt: "",
      },
    ],
    attributes: [],
    default_attributes: [],
    variations: [],
    grouped_products: [],
    menu_order: 0,
    meta_data: [
      {
        id: 163947,
        key: "inline_featured_image",
        value: "0",
      },
      {
        id: 163953,
        key: "mkdf_show_new_sign_woo_meta",
        value: "no",
      },
      {
        id: 163954,
        key: "_wfg_single_gift_allowed",
        value: "1",
      },
      {
        id: 163972,
        key: "slide_template",
        value: "",
      },
      {
        id: 163973,
        key: "rs_page_bg_color",
        value: "",
      },
    ],
    _links: {
      self: [
        {
          href:
            "https://laboratoiretresorsnaturels.tn/wp-json/wc/v3/products/7922",
        },
      ],
      collection: [
        {
          href: "https://laboratoiretresorsnaturels.tn/wp-json/wc/v3/products",
        },
      ],
    },
  },
  {
    id: 7919,
    name: "Crème coiffante - moelle de bœuf",
    slug: "creme-coiffante-moelle-de-boeuf",
    permalink:
      "https://laboratoiretresorsnaturels.tn/product/creme-coiffante-moelle-de-boeuf/",
    date_created: "2021-03-01T15:32:27",
    date_created_gmt: "2021-03-01T14:32:27",
    date_modified: "2021-03-22T11:52:42",
    date_modified_gmt: "2021-03-22T10:52:42",
    type: "simple",
    status: "publish",
    featured: false,
    catalog_visibility: "visible",
    description:
      "<p>Maintient votre coiffure en lui gardant tout son naturel, assouplit, hydrate et protège les cheveux fragiles et abîmés.<br />\n<strong>INCI</strong> :<br />\nAqua, Aloe vera, Argania spinosa oil, beef marrow, glycérine stéarate se,Hydrolyzed wheat protein,Sodium hyaluronate, Silk amino acids, Benzyl alcohol, Dehydroacetic acid. fragrance natural.<br />\n<strong>Mode d’utilisation :</strong><br />\nRépartissez une noisette du crème entre vos mains et appliquez-la ensuite sur l'ensemble de la chevelure (humide ou sèche)<br />\n<strong>PRÉCAUTION :</strong><br />\nGardez votre flacon à l'abri de la lumière et de la chaleur.<br />\n<strong>COMPOSITION :</strong><br />\nHuile d'argan, moelle de boeuf, aloe vera , acide hyaluronique, kératine végétale, protéine de soie.</p>\n",
    short_description: "<h4>100ml</h4>\n",
    sku: "",
    price: "35",
    regular_price: "35",
    sale_price: "",
    date_on_sale_from: null,
    date_on_sale_from_gmt: null,
    date_on_sale_to: null,
    date_on_sale_to_gmt: null,
    price_html:
      '<span class="woocommerce-Price-amount amount">35.00&nbsp;<span class="woocommerce-Price-currencySymbol">TND</span></span>',
    on_sale: false,
    purchasable: true,
    total_sales: 43,
    virtual: false,
    downloadable: false,
    downloads: [],
    download_limit: -1,
    download_expiry: -1,
    external_url: "",
    button_text: "",
    tax_status: "taxable",
    tax_class: "",
    manage_stock: false,
    stock_quantity: null,
    stock_status: "instock",
    backorders: "no",
    backorders_allowed: false,
    backordered: false,
    sold_individually: false,
    weight: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
    shipping_required: true,
    shipping_taxable: true,
    shipping_class: "",
    shipping_class_id: 0,
    reviews_allowed: false,
    average_rating: "0.00",
    rating_count: 0,
    related_ids: [7911, 3842, 7913, 3838, 4187],
    upsell_ids: [],
    cross_sell_ids: [],
    parent_id: 0,
    purchase_note: "",
    categories: [
      {
        id: 181,
        name: "Moelle de boeuf",
        slug: "moelle-de-boeuf",
      },
      {
        id: 102,
        name: "Produits coiffants",
        slug: "produits-coiffants",
      },
    ],
    tags: [],
    images: [
      {
        id: 7920,
        date_created: "2021-03-01T16:32:10",
        date_created_gmt: "2021-03-01T14:32:10",
        date_modified: "2021-03-01T16:32:10",
        date_modified_gmt: "2021-03-01T14:32:10",
        src: "https://laboratoiretresorsnaturels.tn/inyrdeds/2021/03/cr_mb.jpg",
        name: "cr_mb",
        alt: "",
      },
    ],
    attributes: [],
    default_attributes: [],
    variations: [],
    grouped_products: [],
    menu_order: 0,
    meta_data: [
      {
        id: 163874,
        key: "inline_featured_image",
        value: "0",
      },
      {
        id: 163880,
        key: "mkdf_show_new_sign_woo_meta",
        value: "no",
      },
      {
        id: 163881,
        key: "_wfg_single_gift_allowed",
        value: "1",
      },
      {
        id: 163899,
        key: "slide_template",
        value: "",
      },
      {
        id: 163900,
        key: "rs_page_bg_color",
        value: "",
      },
    ],
    _links: {
      self: [
        {
          href:
            "https://laboratoiretresorsnaturels.tn/wp-json/wc/v3/products/7919",
        },
      ],
      collection: [
        {
          href: "https://laboratoiretresorsnaturels.tn/wp-json/wc/v3/products",
        },
      ],
    },
  },
  {
    id: 7917,
    name: "Elixir pousse - moelle de bœuf",
    slug: "elixir-pousse-moelle-de-boeuf",
    permalink:
      "https://laboratoiretresorsnaturels.tn/product/elixir-pousse-moelle-de-boeuf/",
    date_created: "2021-03-01T15:31:01",
    date_created_gmt: "2021-03-01T14:31:01",
    date_modified: "2021-03-01T15:31:01",
    date_modified_gmt: "2021-03-01T14:31:01",
    type: "simple",
    status: "publish",
    featured: false,
    catalog_visibility: "visible",
    description:
      "<p>Vous rêvez de longs cheveux, souples et brillants ? Véritable cocktail d'huiles naturelles et bienfaisantes aux vertus fortifiantes, stimulantes et embellissantes, ce soin complet prend soin de vos cheveux en leurs apportant force et brillance.<br />\n<strong>INCI</strong> :<br />\nNigella sativa oil, Argania spinosa oil, beef marrow, Ricinus communis oil, Brassica nigra seed oil, Watercress oil, Eclipta alba powder, Hedychium spicatum root powder ,Laurus nobilis oil, Salvia sclarea Linnaeus oil,Cedrus atlantica oil, Citrus paradisii oil, Cananga odorata oil.<br />\n<strong>Mode d’utilisation :</strong><br />\nUtilisez une fois par semaine sur les racines pendant 1 à 2 heures avant lavage des cheveux.<br />\n<strong>PRÉCAUTION :</strong><br />\nDéconseillé pour les femmes enceintes et allaitantes et les enfants moins de 8 ans.<br />\nTestez au préalable sur le pli du coude.<br />\nArrêtez l’application en cas de rougeurs ou d’allergie.<br />\n<strong>COMPOSITION :</strong><br />\nMoelle de boeuf, huile de nigelle, huile de cresson, huile de ricin, huile de moutarde, huile d’argan, huiles essentielles de sauge sclarée, cèdre d’atlas, pomplemousse, ylang ylang, laurier noble, poudres de bhringaraj, kachur, kapoor kachli.</p>\n",
    short_description: "<h4>110ml</h4>\n",
    sku: "",
    price: "42",
    regular_price: "42",
    sale_price: "",
    date_on_sale_from: null,
    date_on_sale_from_gmt: null,
    date_on_sale_to: null,
    date_on_sale_to_gmt: null,
    price_html:
      '<span class="woocommerce-Price-amount amount">42.00&nbsp;<span class="woocommerce-Price-currencySymbol">TND</span></span>',
    on_sale: false,
    purchasable: true,
    total_sales: 35,
    virtual: false,
    downloadable: false,
    downloads: [],
    download_limit: -1,
    download_expiry: -1,
    external_url: "",
    button_text: "",
    tax_status: "taxable",
    tax_class: "",
    manage_stock: false,
    stock_quantity: null,
    stock_status: "instock",
    backorders: "no",
    backorders_allowed: false,
    backordered: false,
    sold_individually: false,
    weight: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
    shipping_required: true,
    shipping_taxable: true,
    shipping_class: "",
    shipping_class_id: 0,
    reviews_allowed: false,
    average_rating: "0.00",
    rating_count: 0,
    related_ids: [7919, 7911, 7913, 7915],
    upsell_ids: [],
    cross_sell_ids: [],
    parent_id: 0,
    purchase_note: "",
    categories: [
      {
        id: 181,
        name: "Moelle de boeuf",
        slug: "moelle-de-boeuf",
      },
    ],
    tags: [],
    images: [
      {
        id: 7918,
        date_created: "2021-03-01T16:30:45",
        date_created_gmt: "2021-03-01T14:30:45",
        date_modified: "2021-03-01T16:30:45",
        date_modified_gmt: "2021-03-01T14:30:45",
        src:
          "https://laboratoiretresorsnaturels.tn/inyrdeds/2021/03/eli_mb.jpg",
        name: "eli_mb",
        alt: "",
      },
    ],
    attributes: [],
    default_attributes: [],
    variations: [],
    grouped_products: [],
    menu_order: 0,
    meta_data: [
      {
        id: 163847,
        key: "inline_featured_image",
        value: "0",
      },
      {
        id: 163853,
        key: "mkdf_show_new_sign_woo_meta",
        value: "no",
      },
      {
        id: 163854,
        key: "_wfg_single_gift_allowed",
        value: "1",
      },
      {
        id: 163872,
        key: "slide_template",
        value: "",
      },
      {
        id: 163873,
        key: "rs_page_bg_color",
        value: "",
      },
    ],
    _links: {
      self: [
        {
          href:
            "https://laboratoiretresorsnaturels.tn/wp-json/wc/v3/products/7917",
        },
      ],
      collection: [
        {
          href: "https://laboratoiretresorsnaturels.tn/wp-json/wc/v3/products",
        },
      ],
    },
  },
  {
    id: 7915,
    name: "Masque cheveux secs - moelle de bœuf",
    slug: "masque-cheveux-secs-moelle-de-boeuf",
    permalink:
      "https://laboratoiretresorsnaturels.tn/product/masque-cheveux-secs-moelle-de-boeuf/",
    date_created: "2021-03-01T15:29:13",
    date_created_gmt: "2021-03-01T14:29:13",
    date_modified: "2021-03-22T11:53:06",
    date_modified_gmt: "2021-03-22T10:53:06",
    type: "simple",
    status: "publish",
    featured: false,
    catalog_visibility: "visible",
    description:
      "<p>Assouplit les cheveux difficiles et délicats à démêler.<br />\nNourrit et répare profondément les cheveux secs et abimés.<br />\n<strong>INCI :</strong><br />\nButyrospermum parkii butter, Persea gratissima oil, Nigella sativa oil, Prunus dulcis oil, beef marrow , Brassica nigra seed , Argania spinosa oil, Olea europaea oil, Ricinus communis oil, Opuntia ficus indica oil.<br />\n<strong>Mode d’utilisation :</strong><br />\nAppliquez avant le shampoing sur cheveux secs, sur la partie la plus sèche. Laissez agir de 30 minutes à 2 heures.<br />\n<strong>PRÉCAUTION :</strong><br />\nTestez au préalable sur le pli du coude.<br />\nArrêtez l’application en cas de rougeurs ou d’allergie.<br />\n<strong>COMPOSITION :</strong><br />\nMoelle de boeuf, huile de moutarde, beurre de Karité, huiles d’avocat,argan, amande douce, ricin, nigelle et pépins de figue de barbarie.</p>\n",
    short_description: "<p>150g</p>\n",
    sku: "",
    price: "40",
    regular_price: "40",
    sale_price: "",
    date_on_sale_from: null,
    date_on_sale_from_gmt: null,
    date_on_sale_to: null,
    date_on_sale_to_gmt: null,
    price_html:
      '<span class="woocommerce-Price-amount amount">40.00&nbsp;<span class="woocommerce-Price-currencySymbol">TND</span></span>',
    on_sale: false,
    purchasable: true,
    total_sales: 36,
    virtual: false,
    downloadable: false,
    downloads: [],
    download_limit: -1,
    download_expiry: -1,
    external_url: "",
    button_text: "",
    tax_status: "taxable",
    tax_class: "",
    manage_stock: false,
    stock_quantity: null,
    stock_status: "instock",
    backorders: "no",
    backorders_allowed: false,
    backordered: false,
    sold_individually: false,
    weight: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
    shipping_required: true,
    shipping_taxable: true,
    shipping_class: "",
    shipping_class_id: 0,
    reviews_allowed: false,
    average_rating: "0.00",
    rating_count: 0,
    related_ids: [6397, 7917, 3792, 3789, 7913],
    upsell_ids: [],
    cross_sell_ids: [],
    parent_id: 0,
    purchase_note: "",
    categories: [
      {
        id: 99,
        name: "Masques cheveux &amp; lotions",
        slug: "masques-cheveux-lotions",
      },
      {
        id: 181,
        name: "Moelle de boeuf",
        slug: "moelle-de-boeuf",
      },
    ],
    tags: [],
    images: [
      {
        id: 7916,
        date_created: "2021-03-01T16:28:59",
        date_created_gmt: "2021-03-01T14:28:59",
        date_modified: "2021-03-01T16:28:59",
        date_modified_gmt: "2021-03-01T14:28:59",
        src:
          "https://laboratoiretresorsnaturels.tn/inyrdeds/2021/03/sev_mb.jpg",
        name: "sev_mb",
        alt: "",
      },
    ],
    attributes: [],
    default_attributes: [],
    variations: [],
    grouped_products: [],
    menu_order: 0,
    meta_data: [
      {
        id: 163820,
        key: "inline_featured_image",
        value: "0",
      },
      {
        id: 163826,
        key: "mkdf_show_new_sign_woo_meta",
        value: "no",
      },
      {
        id: 163827,
        key: "_wfg_single_gift_allowed",
        value: "1",
      },
      {
        id: 163845,
        key: "slide_template",
        value: "",
      },
      {
        id: 163846,
        key: "rs_page_bg_color",
        value: "",
      },
    ],
    _links: {
      self: [
        {
          href:
            "https://laboratoiretresorsnaturels.tn/wp-json/wc/v3/products/7915",
        },
      ],
      collection: [
        {
          href: "https://laboratoiretresorsnaturels.tn/wp-json/wc/v3/products",
        },
      ],
    },
  },
  {
    id: 7913,
    name: "Masque force - moelle de bœuf",
    slug: "masque-force-moelle-de-boeuf",
    permalink:
      "https://laboratoiretresorsnaturels.tn/product/masque-force-moelle-de-boeuf/",
    date_created: "2021-03-01T15:27:41",
    date_created_gmt: "2021-03-01T14:27:41",
    date_modified: "2021-03-05T09:43:06",
    date_modified_gmt: "2021-03-05T08:43:06",
    type: "simple",
    status: "publish",
    featured: false,
    catalog_visibility: "visible",
    description:
      "<p>Ce puissant régénérateur est ultra-riche en éléments nutritifs. Il nourrit, revitalise et restructure en profondeur la fibre capillaire.<br />\nRépare et fortifie le cheveu de la racine à la pointe.<br />\nGaine les cheveux, les rend plus forts, plus brillants et plus facile à coiffer, sans les graisser ni les alourdir.<br />\n<strong>INCI :</strong><br />\nAqua, Aloe vera, Argania spinosa oil, beef marrow, Brassica nigra seed oil, glycerine stéarate se, Panthenol, Glycoproteins, squalane, Sodium hyaluronate,Benzyl alcohol, Dehydroacetic acid, biotin,<br />\ngomme xanthane, parfum.<br />\n<strong>Mode d’utilisation :</strong><br />\nAppliquez une à deux fois par semaine, sur des cheveux secs ou humides<br />\nLaissez agir 30 minutes. Lavez avec un shampoing très doux.<br />\nAppliquez après le shampooing sur cheveux essorés et laissez poser de 5 à 10 minutes puis rincez à l'eau claire.<br />\n<strong>COMPOSITION</strong> :<br />\nAloe vera, moelle de boeuf, huile de moutarde, huile d'argan, collagène, acide hyaluronique, biotine, Provitamine b5.</p>\n",
    short_description: "<h4>250ml</h4>\n",
    sku: "",
    price: "58",
    regular_price: "58",
    sale_price: "",
    date_on_sale_from: null,
    date_on_sale_from_gmt: null,
    date_on_sale_to: null,
    date_on_sale_to_gmt: null,
    price_html:
      '<span class="woocommerce-Price-amount amount">58.00&nbsp;<span class="woocommerce-Price-currencySymbol">TND</span></span>',
    on_sale: false,
    purchasable: true,
    total_sales: 65,
    virtual: false,
    downloadable: false,
    downloads: [],
    download_limit: -1,
    download_expiry: -1,
    external_url: "",
    button_text: "",
    tax_status: "taxable",
    tax_class: "",
    manage_stock: false,
    stock_quantity: null,
    stock_status: "instock",
    backorders: "no",
    backorders_allowed: false,
    backordered: false,
    sold_individually: false,
    weight: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
    shipping_required: true,
    shipping_taxable: true,
    shipping_class: "",
    shipping_class_id: 0,
    reviews_allowed: false,
    average_rating: "0.00",
    rating_count: 0,
    related_ids: [7911, 7919, 7915, 7917],
    upsell_ids: [],
    cross_sell_ids: [],
    parent_id: 0,
    purchase_note: "",
    categories: [
      {
        id: 101,
        name: "Après shampoing",
        slug: "apres-shampoing",
      },
      {
        id: 181,
        name: "Moelle de boeuf",
        slug: "moelle-de-boeuf",
      },
    ],
    tags: [],
    images: [
      {
        id: 7914,
        date_created: "2021-03-01T16:27:18",
        date_created_gmt: "2021-03-01T14:27:18",
        date_modified: "2021-03-01T16:27:18",
        date_modified_gmt: "2021-03-01T14:27:18",
        src:
          "https://laboratoiretresorsnaturels.tn/inyrdeds/2021/03/masque_mb.jpg",
        name: "masque_mb",
        alt: "",
      },
    ],
    attributes: [],
    default_attributes: [],
    variations: [],
    grouped_products: [],
    menu_order: 0,
    meta_data: [
      {
        id: 163793,
        key: "inline_featured_image",
        value: "0",
      },
      {
        id: 163799,
        key: "mkdf_show_new_sign_woo_meta",
        value: "no",
      },
      {
        id: 163800,
        key: "_wfg_single_gift_allowed",
        value: "1",
      },
      {
        id: 163818,
        key: "slide_template",
        value: "",
      },
      {
        id: 163819,
        key: "rs_page_bg_color",
        value: "",
      },
    ],
    _links: {
      self: [
        {
          href:
            "https://laboratoiretresorsnaturels.tn/wp-json/wc/v3/products/7913",
        },
      ],
      collection: [
        {
          href: "https://laboratoiretresorsnaturels.tn/wp-json/wc/v3/products",
        },
      ],
    },
  },
  {
    id: 7911,
    name: "Shampoing - Moelle de bœuf",
    slug: "shampoing-moelle-de-boeuf",
    permalink:
      "https://laboratoiretresorsnaturels.tn/product/shampoing-moelle-de-boeuf/",
    date_created: "2021-03-01T15:23:25",
    date_created_gmt: "2021-03-01T14:23:25",
    date_modified: "2021-03-05T09:42:54",
    date_modified_gmt: "2021-03-05T08:42:54",
    type: "simple",
    status: "publish",
    featured: false,
    catalog_visibility: "visible",
    description:
      "<p>Shampoing très doux, réparateur et nourrissant.<br />\nGrâce à sa formule composée d'ingrédients d'origine naturelle, nourrit les cheveux abimés tout en hydratant votre fibre capillaire en profondeur.<br />\n<strong>INCI :</strong><br />\nAqua, cocoamidopropylbetain, Coco glucoside and Glyceryl oleate, Cocos nucifera oil , Avena sativa milk, beef marrow, Brassica nigra seed oil, xanthan gum, benzyl alcohol, dehydroacetic acid,fragrance natural.<br />\n<strong>Mode d’utilisation :</strong><br />\nBien répartir sur cheveux secs, rincez soigneusement.<br />\nRépétez si nécessaire.<br />\n<strong>PRÉCAUTION :</strong><br />\nArrêtez l’application en cas d’allergie.<br />\n<strong>COMPOSITION :</strong><br />\nMoelle de bœuf, huiles de coco et moutarde, lait d'avoine.</p>\n",
    short_description: "<h4>400ml</h4>\n",
    sku: "",
    price: "38",
    regular_price: "38",
    sale_price: "",
    date_on_sale_from: null,
    date_on_sale_from_gmt: null,
    date_on_sale_to: null,
    date_on_sale_to_gmt: null,
    price_html:
      '<span class="woocommerce-Price-amount amount">38.00&nbsp;<span class="woocommerce-Price-currencySymbol">TND</span></span>',
    on_sale: false,
    purchasable: true,
    total_sales: 72,
    virtual: false,
    downloadable: false,
    downloads: [],
    download_limit: -1,
    download_expiry: -1,
    external_url: "",
    button_text: "",
    tax_status: "taxable",
    tax_class: "",
    manage_stock: false,
    stock_quantity: null,
    stock_status: "instock",
    backorders: "no",
    backorders_allowed: false,
    backordered: false,
    sold_individually: false,
    weight: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
    shipping_required: true,
    shipping_taxable: true,
    shipping_class: "",
    shipping_class_id: 0,
    reviews_allowed: false,
    average_rating: "0.00",
    rating_count: 0,
    related_ids: [4183, 3798, 7919, 3799, 7917],
    upsell_ids: [],
    cross_sell_ids: [],
    parent_id: 0,
    purchase_note: "",
    categories: [
      {
        id: 181,
        name: "Moelle de boeuf",
        slug: "moelle-de-boeuf",
      },
      {
        id: 100,
        name: "Shampoings",
        slug: "shampoings",
      },
    ],
    tags: [],
    images: [
      {
        id: 7912,
        date_created: "2021-03-01T16:22:52",
        date_created_gmt: "2021-03-01T14:22:52",
        date_modified: "2021-03-01T16:22:52",
        date_modified_gmt: "2021-03-01T14:22:52",
        src: "https://laboratoiretresorsnaturels.tn/inyrdeds/2021/03/sh_mb.jpg",
        name: "sh_mb",
        alt: "",
      },
    ],
    attributes: [],
    default_attributes: [],
    variations: [],
    grouped_products: [],
    menu_order: 0,
    meta_data: [
      {
        id: 163766,
        key: "inline_featured_image",
        value: "0",
      },
      {
        id: 163772,
        key: "mkdf_show_new_sign_woo_meta",
        value: "no",
      },
      {
        id: 163773,
        key: "_wfg_single_gift_allowed",
        value: "1",
      },
      {
        id: 163791,
        key: "slide_template",
        value: "",
      },
      {
        id: 163792,
        key: "rs_page_bg_color",
        value: "",
      },
    ],
    _links: {
      self: [
        {
          href:
            "https://laboratoiretresorsnaturels.tn/wp-json/wc/v3/products/7911",
        },
      ],
      collection: [
        {
          href: "https://laboratoiretresorsnaturels.tn/wp-json/wc/v3/products",
        },
      ],
    },
  },
  {
    id: 7409,
    name: "Hydrolat d'encens oliban",
    slug: "hydrolat-dencens-oliban",
    permalink:
      "https://laboratoiretresorsnaturels.tn/product/hydrolat-dencens-oliban/",
    date_created: "2021-02-08T11:25:47",
    date_created_gmt: "2021-02-08T10:25:47",
    date_modified: "2021-03-17T13:08:54",
    date_modified_gmt: "2021-03-17T12:08:54",
    type: "simple",
    status: "publish",
    featured: false,
    catalog_visibility: "visible",
    description:
      "<p>Régénérant et assouplissant, utilisé dans les masques et soins pour visage pour un effet lifting instantané.<br />\n- Raffermissant<br />\n- Rafraîchissant<br />\n- Réparateur, purifiant, il facilite la cicatrisation .<br />\n<strong>INCI :</strong><br />\nBoswellia carterii water<br />\n<strong>Mode d’utilisation :</strong><br />\nPour vaporisation sur la peau de votre visage et de votre cou après les avoir nettoyés. Appliquez ensuite votre crème ou huile de soin immédiatement sur la peau humide.<br />\n- Incorporé en phase aqueuse dans vos formules cosmétiques maison.<br />\n- En bain relaxant et harmonisant, versez 4 cuillères à soupe d'hydrolat d'Encens directement dans l'eau du bain<br />\n<strong>PRÉCAUTION :</strong><br />\nTestez au préalable sur le pli du coude.<br />\nArrêtez l’application en cas de rougeurs ou d’allergie.</p>\n",
    short_description: "<h4>170ml</h4>\n",
    sku: "",
    price: "17",
    regular_price: "17",
    sale_price: "",
    date_on_sale_from: null,
    date_on_sale_from_gmt: null,
    date_on_sale_to: null,
    date_on_sale_to_gmt: null,
    price_html:
      '<span class="woocommerce-Price-amount amount">17.00&nbsp;<span class="woocommerce-Price-currencySymbol">TND</span></span>',
    on_sale: false,
    purchasable: true,
    total_sales: 20,
    virtual: false,
    downloadable: false,
    downloads: [],
    download_limit: -1,
    download_expiry: -1,
    external_url: "",
    button_text: "",
    tax_status: "taxable",
    tax_class: "",
    manage_stock: false,
    stock_quantity: null,
    stock_status: "instock",
    backorders: "no",
    backorders_allowed: false,
    backordered: false,
    sold_individually: false,
    weight: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
    shipping_required: true,
    shipping_taxable: true,
    shipping_class: "",
    shipping_class_id: 0,
    reviews_allowed: false,
    average_rating: "0.00",
    rating_count: 0,
    related_ids: [4013, 4021, 4032, 7299, 4025],
    upsell_ids: [],
    cross_sell_ids: [],
    parent_id: 0,
    purchase_note: "",
    categories: [
      {
        id: 120,
        name: "Huiles &amp; hydrolats",
        slug: "huiles-hydrolats",
      },
      {
        id: 122,
        name: "Les hydrolats",
        slug: "les-hydrolats",
      },
    ],
    tags: [],
    images: [
      {
        id: 7779,
        date_created: "2021-02-15T14:50:33",
        date_created_gmt: "2021-02-15T12:50:33",
        date_modified: "2021-02-15T14:50:33",
        date_modified_gmt: "2021-02-15T12:50:33",
        src:
          "https://laboratoiretresorsnaturels.tn/inyrdeds/2021/02/oliban.jpg",
        name: "oliban",
        alt: "",
      },
    ],
    attributes: [],
    default_attributes: [],
    variations: [],
    grouped_products: [],
    menu_order: 0,
    meta_data: [
      {
        id: 138308,
        key: "inline_featured_image",
        value: "0",
      },
      {
        id: 138360,
        key: "mkdf_show_new_sign_woo_meta",
        value: "no",
      },
      {
        id: 138361,
        key: "_wfg_single_gift_allowed",
        value: "1",
      },
      {
        id: 138379,
        key: "slide_template",
        value: "",
      },
      {
        id: 138380,
        key: "rs_page_bg_color",
        value: "",
      },
    ],
    _links: {
      self: [
        {
          href:
            "https://laboratoiretresorsnaturels.tn/wp-json/wc/v3/products/7409",
        },
      ],
      collection: [
        {
          href: "https://laboratoiretresorsnaturels.tn/wp-json/wc/v3/products",
        },
      ],
    },
  },
  {
    id: 7376,
    name: "Exfoliant corps - Lavande et géranium",
    slug: "exfoliant-corp-lavande",
    permalink:
      "https://laboratoiretresorsnaturels.tn/product/exfoliant-corp-lavande/",
    date_created: "2021-02-05T13:04:26",
    date_created_gmt: "2021-02-05T12:04:26",
    date_modified: "2021-03-16T09:39:55",
    date_modified_gmt: "2021-03-16T08:39:55",
    type: "simple",
    status: "publish",
    featured: false,
    catalog_visibility: "visible",
    description:
      "<p>Révélateur d’éclat instantané.<br />\n<strong>INCI :</strong><br />\nAqua, Kaolin, Olea europaea oil , Prunus dulcis oil, honey xanthan gum, Vaccinium myrtillus fruit extract Saccharum officinarum extract Citrus aurantium dulcis fruit extract Citrus limon fruit extract Acer saccharum extract ,Opuntia ficus indica powder, Benzyl alcohol, Dehydroacetic acid<br />\n<strong>Mode d’utilisation :</strong><br />\nUtilisez une fois par semaine sur une peau mouillée.<br />\n<strong>PRÉCAUTION :</strong><br />\nArrêtez l’application en cas de rougeurs ou d’allergie.<br />\n<strong>COMPOSITION :</strong><br />\nArgile blanche, huile d'olive,huile d'amande douce,farine de graines de figue de barbarie, acides de fruits.</p>\n",
    short_description: "<h4>150gr</h4>\n",
    sku: "",
    price: "15",
    regular_price: "15",
    sale_price: "",
    date_on_sale_from: null,
    date_on_sale_from_gmt: null,
    date_on_sale_to: null,
    date_on_sale_to_gmt: null,
    price_html:
      '<span class="woocommerce-Price-amount amount">15.00&nbsp;<span class="woocommerce-Price-currencySymbol">TND</span></span>',
    on_sale: false,
    purchasable: true,
    total_sales: 8,
    virtual: false,
    downloadable: false,
    downloads: [],
    download_limit: -1,
    download_expiry: -1,
    external_url: "",
    button_text: "",
    tax_status: "taxable",
    tax_class: "",
    manage_stock: false,
    stock_quantity: null,
    stock_status: "instock",
    backorders: "no",
    backorders_allowed: false,
    backordered: false,
    sold_individually: false,
    weight: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
    shipping_required: true,
    shipping_taxable: true,
    shipping_class: "",
    shipping_class_id: 0,
    reviews_allowed: false,
    average_rating: "0.00",
    rating_count: 0,
    related_ids: [7359, 4180, 5956, 7370, 7363],
    upsell_ids: [],
    cross_sell_ids: [],
    parent_id: 0,
    purchase_note: "",
    categories: [
      {
        id: 169,
        name: "Bain &amp; douche",
        slug: "bain-douche",
      },
      {
        id: 119,
        name: "corps",
        slug: "corps",
      },
    ],
    tags: [],
    images: [
      {
        id: 7372,
        date_created: "2021-02-05T14:02:36",
        date_created_gmt: "2021-02-05T12:02:36",
        date_modified: "2021-02-05T14:02:36",
        date_modified_gmt: "2021-02-05T12:02:36",
        src:
          "https://laboratoiretresorsnaturels.tn/inyrdeds/2021/02/exfoliant-lavande.jpg",
        name: "exfoliant-lavande",
        alt: "",
      },
    ],
    attributes: [],
    default_attributes: [],
    variations: [],
    grouped_products: [],
    menu_order: 4,
    meta_data: [
      {
        id: 136816,
        key: "inline_featured_image",
        value: "0",
      },
      {
        id: 136820,
        key: "mkdf_show_new_sign_woo_meta",
        value: "no",
      },
      {
        id: 136821,
        key: "_wfg_single_gift_allowed",
        value: "1",
      },
      {
        id: 136839,
        key: "slide_template",
        value: "",
      },
      {
        id: 136840,
        key: "rs_page_bg_color",
        value: "",
      },
    ],
  },
];

export default function AllProductsPage() {
  const [lastChecked, setlastChecked] = useState(null);
  const [selectedItems, setselectedItems] = useState([]);
  const [products, setproducts] = useState(productArray2);
  const [displayMode, setdisplayMode] = useState("thumblist");
  const [pageSizes, setpageSizes] = useState([10, 20, 30, 50, 100]);

  const getIndex = (value, arr, prop) => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
    return -1;
  };

  const onCheckItem = (event, id) => {
    if (
      event.target.tagName === "A" ||
      (event.target.parentElement && event.target.parentElement.tagName === "A")
    ) {
      return true;
    }
    if (lastChecked === null) {
      setlastChecked(id);
    }

    let selectedItems1 = selectedItems;
    if (selectedItems1.includes(id)) {
      selectedItems1 = selectedItems1.filter((x) => x !== id);
    } else {
      selectedItems1.push(id);
    }
    setselectedItems(selectedItems1);

    if (event.shiftKey) {
      var items = products;
      var start = getIndex(id, items, "id");
      var end = getIndex(lastChecked, items, "id");
      items = items.slice(Math.min(start, end), Math.max(start, end) + 1);
      selectedItems1.push(
        ...items.map((item) => {
          return item.id;
        })
      );
      selectedItems1 = Array.from(new Set(selectedItems1));
      setselectedItems(selectedItems1);
    }
    document.activeElement.blur();
  };

  const changeDisplayMode = (mode) => {
    setdisplayMode(mode);
    return false;
  };

  return (
    <div className="col-md-12">
      <ListPageHeading
        heading="Tous les produits"
        displayMode={displayMode}
        changeDisplayMode={changeDisplayMode}
      />
      <Separator className="mb-5" />
      <Row>
        {products.map((product) => {
          if (displayMode === "imagelist") {
            return (
              <ImageListView
                key={product.id}
                product={product}
                isSelect={selectedItems.includes(product.id)}
                collect={collect}
                onCheckItem={onCheckItem}
              />
            );
          } else if (displayMode === "thumblist") {
            return (
              <ThumbListView
                key={product.id}
                product={product}
                isSelect={selectedItems.includes(product.id)}
                collect={collect}
                onCheckItem={onCheckItem}
              />
            );
          }
        })}
      </Row>
    </div>
  );
}

function collect(props) {
  return { data: props.data };
}
