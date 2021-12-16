import Card from '../layout/Card';
const Books = () => {
  return (
    <section id='books-comp'>
      <div className='column is-full'>
        These are some of the books i have read this year
      </div>
      <div id='this-month' className='columns is-mobile is-multiline'>
        <article className='column is-3-desktop is-4-tablet is-half-mobile'>
          <Card />
        </article>
        <article className='column is-3-desktop is-4-tablet is-half-mobile'>
          <Card />
        </article>
        <article className='column is-3-desktop is-4-tablet is-half-mobile'>
          <Card />
        </article>
        <article className='column is-3-desktop is-4-tablet is-half-mobile'>
          <Card />
        </article>
      </div>
    </section>
  );
};

export default Books;
