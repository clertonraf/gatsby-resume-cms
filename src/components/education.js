import React from 'react';

const Education = ({ data }) => (
  <section className="mb-5">
    <h1 className="section-header mb-5">Schulische Bildung</h1>
    {data &&
      data.map(item => (
        <div className="my-2" key={item.degree}>
          <h2 className="item-header text-lg">
            {item?.certificate
              ? <a href={item.certificate} target="_blank" rel="noreferrer">{item.degree}</a>
              : item.degree
            }
          </h2>
          <h3 className="item-sub">{item.institution}</h3>
          <p className="text-sm text-neutral-500 font-light">
            {item.start} - {item.end}
          </p>
        </div>
      ))}
  </section>
);

export default Education;
