 import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
function App() {
  return (
    <div className="App">
        {/* <nav className="navbar navbar-dark navbar-expand-sm bg-primary fixed-top">
            <div className="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
                <a href="#" className="navbar-brand">Ristorante con Fusion</a>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Menu</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                </ul>
                </div>
            </div>
        </nav>
         */}
           <header class="jumbotron">
        <div class="container">
            <div class="row row-header">
                <div class="col-12 col-xl-12">
                    <h1>Ristorante con Fusion</h1>
                    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                </div>
                
            </div>
        </div>
    </header>
{/* 
--------index .html---------
    <div>
        <div>
            <div>
                <h3>Our Lipsmacking Culinary Creations</h3>
            </div>
            <div>
                <h2>Uthappizza</h2>
                <p>A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.</p>
            </div>
        </div>


        <div>
            <div>
                <h3>This Month's Promotions</h3>
            </div>
            <div>
                <h2>Weekend Grand Buffet</h2>
                <p>Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person </p>
            </div>
        </div>

        <div>
            <div>
                <h3>Meet our Culinary Specialists</h3>
            </div>
            <div>
                <h2>Alberto Somayya</h2>
                <h4>Executive Chef</h4>
                <p>Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. </p>
            </div>
        </div>
    </div>

    */}
    <div className="container mid-sect">
        <div className="row">
            <div className="col-sm-12">
               <h3 className="text-left">About Us</h3>
               <hr/>
            </div>
        </div>

        <div className="row">
            <div className="col-sm-6 text-left">
                <h2>Our History</h2>
                <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
            </div>
        </div>


        <div className="row">
            <div className="col-sm-12">
                <h2>Corporate Leadership</h2>
                <h3>Peter Pan <small>Chief Epicurious Officer</small></h3>
                <p className="d-none d-sm-block">Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which <em>The Frying Pan</em> became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections.</p>
                <h3>Dhanasekaran Witherspoon <small>Chief Food Officer</small></h3>
                <p className="d-none d-sm-block">Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, <em>Everything that runs, wins, and everything that stays, pays!</em></p>
                <h3>Agumbe Tang <small>Chief Taste Officer</small></h3>
                <p className="d-none d-sm-block">Blessed with the most discerning gustatory sense, Agumbe, our CTO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, <em>You click only if you survive my lick.</em></p>
                <h3>Alberto Somayya <small>Executive Chef</small></h3>
                <p className="d-none d-sm-block">Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, <em>Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!</em></p>
            </div>
       </div>

    </div>

    <footer class="footer">
        <div class="container">
            <div class="row">             
                <div class="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                
                <div class="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              121, Clear Water Bay Road<br/>
		              Clear Water Bay, Kowloon<br/>
		              HONG KONG<br/>
		              Tel.: +852 1234 5678<br/>
		              Fax: +852 8765 4321<br/>
		              Email: <a href="mailto:confusion@food.net">confusion@food.net</a>
		           </address>
                </div>
                <div class="col-12 col-sm-4 align-self-center">
                    <div class="text-center">
                        <a href="http://google.com/+">Google+</a>
                        <a href="http://www.facebook.com/profile.php?id=">Facebook</a>
                        <a href="http://www.linkedin.com/in/">LinkedIn</a>
                        <a href="http://twitter.com/">Twitter</a>
                        <a href="http://youtube.com/">YouTube</a>
                        <a href="mailto:">Mail</a>
                    </div>
                </div>
           </div>
           <hr className="mb-0 mt-4"/>
           <div class="row justify-content-center">             
                <div class="col-auto">
                    <p>© Copyright 2018 Ristorante Con Fusion</p>
                </div>
           </div>
        </div>
    </footer>
    


    </div>
  );
}

export default App;
