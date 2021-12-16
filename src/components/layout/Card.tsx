const Card = () => {
  return (
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-4by3'>
          <img
            src='https://bulma.io/images/placeholders/1280x960.png'
            alt='Placeholder image'
          />
        </figure>
      </div>
      <div className='card-content'>
        <div className='media'>
          <div className='media-content'>
            <p className='title is-6' style={{ marginBottom: 4 }}>
              Author Name
            </p>
            <a href='' className='subtitle is-7'>
              Amazon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
