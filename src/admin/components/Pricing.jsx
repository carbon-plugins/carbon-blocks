import { __ } from '@wordpress/i18n';

import Button from "./Button";
import Badge from "./Badge";
import { useState, useCallback } from "react";
import { config } from "../helpers/config";

export default function PricingReact({ data, plugin }) {
  const [ duration, setDuration ] = useState( "yearly" );

  const types = ["free", "personnal", "business", "agency"];
  const renderBuyButton = useCallback((type) => {
		let IDS = duration === "yearly" ? [333, 335, 337] : [334, 336, 338];
    switch (type) {
      case "free": return <div style={{ height: "46.75px" }}></div>
      case "personnal": return <>
				<Button href={`${config.shopUrl}checkout/?add-to-cart=${IDS[0]}&quantity=1“`}>{ __( 'Buy now', 'carbon-blocks' ) }</Button>
      </>
      case "business": return <>
        <Button href={`${config.shopUrl}checkout/?add-to-cart=${IDS[1]}&quantity=1“`}>{ __( 'Buy now', 'carbon-blocks' ) }</Button>
      </>
      case "agency": return <>
        <Button href={`${config.shopUrl}checkout/?add-to-cart=${IDS[2]}&quantity=1“`}>{ __( 'Buy now', 'carbon-blocks' ) }</Button>
      </>
    }
  }, [duration]);

  const renderPricing = (currentPricing, type) => {

    if(type === "free") return <div className="new_price">
      <span>$</span>
      <span>0</span>
    </div>

    return duration === "yearly"
      ? <div className="new_price">
          { currentPricing.oldPrice && <p className="old_price">$<span>{ currentPricing.oldPrice }</span></p> }
          <span>$</span>
          <span>{ currentPricing.price }</span>
          <span>/ { __( 'year', 'carbon-blocks' ) }</span>
        </div>
      : <div className="new_price">
        <span>$</span>
        <span>{ currentPricing.lifetimePrice }</span>
        <span>{ __("once", "carbon-blocks") }</span>
      </div>
  };

  const renderItem = (element, type) => {
    switch(type) {
      case "free": return <span>{ element }</span>
      case "personnal": return <span>{ element }</span>
      case "business": return Array.isArray(element) ? <span>{ element[0] } { element[1] }</span> : <span>{ element }</span>
      case "agency": return Array.isArray(element) ? <span>{ element[0] } { element[1] }</span> : <span>{ element }</span>
    }
  };

  const Pricings = () => {
    return Object.values(types).map(type => {
      const currentPricing = data[type];
      return <article key={currentPricing.title}>
        {
          currentPricing?.badge && <Badge text={ currentPricing.badge.text } style={ currentPricing.badge?.style && currentPricing.badge?.style }/>
        }
        <h3>{ currentPricing.title }</h3>
        { renderPricing( currentPricing, type ) }
        <section className="message">
          { currentPricing.message }
        </section>
        <section className="buttons">
          { renderBuyButton(type) }
        </section>
        <ul>
          {
            type === "free"
              ? <li className="included">{ __( 'Included in free license :', 'carbon-blocks' ) }</li>
              : <li className="included">{ __( 'Everyting in free, plus...', 'carbon-blocks' ) }</li>
          }
          {
            currentPricing.content.map(element => {
              return <li key={element}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                { renderItem(element, type) }
              </li>
            })
          }
        </ul>
      </article>
    });
  }

  return <section className="plugins_pricing">
    <header className="pricing_toggle">
      <button type="button" onClick={() => setDuration("yearly")} className={ duration === "yearly" ? "active" : "" }>
        { __( 'Yearly', 'carbon-blocks' ) }
      </button>
      <button type="button" onClick={() => setDuration("lifetime")} className={ duration === "lifetime" ? "active" : "" }>
        { __( 'Lifetime', 'carbon-blocks' ) }
        <Badge text="Best value" style="secondary" />
      </button>
      <span class="pill"></span>
    </header>
    <section className="pricing_content">
      <Pricings />
    </section>
  </section>
}
