import { __ } from "@wordpress/i18n";

export const carbonBlocksData = {
  free: {
    title: __("Free", "carbon-blocks"),
    price: 0,
    lifetimePrice: 0,
    message: __("Free, forever, for 1 website", "carbon-blocks"),
    content: [
      __("18 free blocks", "carbon-blocks"),
      __("2 free slider blocks", "carbon-blocks"),
      __("Default block animations", "carbon-blocks"),
      __("Duplicate and delete buttons", "carbon-blocks"),
      __("Powerful customization", "carbon-blocks"),
      __("Regular support", "carbon-blocks"),
    ],
    button: {
      text: __("Get started", "carbon-blocks")
    }
  },
  personnal: {
    title: __("Personnal", "carbon-blocks"),
    price: 39,
    lifetimePrice: 149,
    message: __("1 licenses for your webiste", "carbon-blocks"),
    content: [
      __("Yearly licenses for 1 website", "carbon-blocks"),
      __("6 Premium blocks", "carbon-blocks"),
      __("3 Premium slider blocks", "carbon-blocks"),
      __("Premium block animations", "carbon-blocks"),
      __("More animations settings", "carbon-blocks"),
      __("Premium text animations", "carbon-blocks"),
      __("4 premium icon libraries", "carbon-blocks"),
      __("Premium support for 1 year", "carbon-blocks"),
      __("Online chat access", "carbon-blocks"),
      __("Futur updates for 1 year", "carbon-blocks")
    ],
    button: {
      text: __("Buy now", "carbon-blocks")
    }
  },
  business: {
    title: __("Business", "carbon-blocks"),
    price: 149,
    oldPrice: 195,
    lifetimePrice: 399,
    message: __("5 licenses for busy developpers", "carbon-blocks"),
    content: [
      __("Yearly licenses for 5 website", "carbon-blocks"),
      __("6 Premium blocks", "carbon-blocks"),
      __("3 Premium slider blocks", "carbon-blocks"),
      __("Premium block animations", "carbon-blocks"),
      __("More animations settings", "carbon-blocks"),
      __("Premium text animations", "carbon-blocks"),
      __("4 premium icon libraries", "carbon-blocks"),
      __("Premium support for 1 year", "carbon-blocks"),
      __("Online chat access", "carbon-blocks"),
      __("Futur updates for 1 year", "carbon-blocks")
    ],
    button: {
      text: __("Buy now", "carbon-blocks")
    },
    badge: {
      text: __("Most popular", "carbon-blocks")
    }
  },
  agency: {
    title: __("Agency", "carbon-blocks"),
    price: 399,
    oldPrice: 585,
    lifetimePrice: 999,
    message: __("15 licenses for web agencies", "carbon-blocks"),
    content: [
      __("Yearly licenses for 15 website", "carbon-blocks"),
      __("6 Premium blocks", "carbon-blocks"),
      __("3 Premium slider blocks", "carbon-blocks"),
      __("Premium block animations", "carbon-blocks"),
      __("More animations settings", "carbon-blocks"),
      __("Premium text animations", "carbon-blocks"),
      __("4 premium icon libraries", "carbon-blocks"),
      __("Premium support, forever", "carbon-blocks"),
      __("Online chat access, forever", "carbon-blocks"),
      __("Futur updates, forever", "carbon-blocks")
    ],
    button: {
      text: __("Buy now", "carbon-blocks")
    },
    badge: {
      text: __("Best value", "carbon-blocks"),
      style: "secondary"
    }
  }
}
