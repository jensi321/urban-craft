import React, { useEffect, useState } from 'react';
import { BarLoader } from 'react-spinners';

const Loader = () => {

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, [1500])

  }, []);
  if (loading) {
    return (
      <div className='loder-outer'>
        <div className="loder-inner">
          <BarLoader color="#774000" />
        </div>

      </div>
    );
  }
};

export default Loader;