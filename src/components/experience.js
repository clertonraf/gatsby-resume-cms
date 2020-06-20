import React from 'react';
import ArriveIcon from '../assets/plane-arrival-solid.svg';

const Experience = ({ data }) => (
  <section className="mb-5" style={{ paddingBottom: '25px' }}>
    <h1 className="section-header">Berufliche Laufbahn</h1>
    {data &&
      data.map((item, i) => (
        <div>
          { item.migration ?
            <span>
              <h3 className="item-header">
                <i> Ab {item.migration}</i>
                <ArriveIcon
                  style={{ paddingLeft: '10px', height: '1rem' }}
                  className="inline-block h-3 fill-current text-secondary-500"
                />
              </h3>
              <h3 className="item-sub">{item.description}</h3>
            </span>
            : <article className="my-5" key={`${item.company}-${i}`}>
              <h2 className="item-header">{item.role}</h2>
              <h3 className="item-sub">
                {item.company} | {item.start} - {item.end || 'bis Heute'}
              </h3>
              {/* <p className="py-6">{item.description}</p> */}
            </article>
          }
          
        </div>
      ))}
      {/* <article className="my-5" key={`${item.company}-${i}`}>
          <h2 className="item-header">{item.role}</h2>
          <h3 className="item-sub">
            {item.company} | {item.start} - {item.end || 'PRESENT'}
          </h3>
          <p className="py-6">{item.description}</p>
      </article> */}
  </section>
);

export default Experience;
