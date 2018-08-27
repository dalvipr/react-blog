import React from 'react';
import Article from './../Article';
import Banner from '../Banner';

const Welcome = () => {
  return (
    <div>
      <Banner
        subTitle="Read and get updated on how we progress."
        title="Latest Blog Posts"
        backgroundImage="url(assets/img/bg-gift.jpg)"/> {/*<header className="header header-inverse" style={{backgroundImage: 'url(assets/img/bg-gift.jpg)'}} data-overlay={8}>
				<div className="container text-center">
					<div className="row">
					<div className="col-12 col-lg-8 offset-lg-2">
						<h1>Latest Blog Posts</h1>
						<p className="fs-20 opacity-70">Read and get updated on how we progress.</p>
					</div>
					</div>
				</div>
			</header>*/}
      <main className="main-content bg-gray">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3">
            <Article/>
            <hr/>
            <Article/>
            <nav className="flexbox mt-50 mb-50">
              <a className="btn btn-white disabled">
                <i className="ti-arrow-left fs-9 mr-4"/>
                Newer</a>
              <a className="btn btn-white" href="#">Older
                <i className="ti-arrow-right fs-9 ml-4"/>
              </a>
            </nav>
          </div>
        </div>
      </main>

    </div>

  );
}

export default Welcome;