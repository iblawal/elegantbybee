import Head from "next/head";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RequestQuote() {
  return (
    <>
      <Head>
        <title>Request a Quote | ELEGANTE BEE SERVICES</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href=
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href=
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/style.css" />
      </Head>

      {/* ✅ Navbar Component */}
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-15 col-lg-14">
              <div className="hero-text-box">
                <h1 className="display-4 fw-bold">
                  <span className="gold-text">Plan</span> my event
                </h1>
                <p className="lead">
                  Fill out the form below to request a quote for our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="quote-form-section py-5">
        <div className="container">
          <form className="row g-4 quote-form">
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input type="tel" className="form-control" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Event/Occasion</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Event Location</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Date of Event</label>
              <input type="date" className="form-control" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Venue</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Theme of Décor</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Expected Number of Guests</label>
              <input type="number" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Budget</label>
              <input type="text" className="form-control" />
            </div>
          </form>
        </div>
      </section>

      {/* SERVICES FORM */}
      <section>
        <div className="container">
          <h2 className="text-center mb-4">Plan my event</h2>
          <p className="text-center mb-5">
            Please fill out the form below to request a quote for our services.
          </p>

          <form className="row g-4 quote-form">
            <p>Please tick the services you require:</p>

            {/* Food */}
            <h2>Food</h2>
            {["Nigeria dishes","Oriental dishes","Continental dishes","Desserts","Finger Foods","Other Dishes"].map((item, idx) => (
              <div className="form-check" key={idx}>
                <input className="form-check-input" type="checkbox" /> {item}
              </div>
            ))}

            {/* Drinks */}
            <h2 className="mt-3">Drinks</h2>
            {["Alcoholic Cocktails","Non-Alcoholic Cocktails","Alcoholic Drinks","Non-Alcoholic Drinks","Red Wine","Champagne","Others"].map((item, idx) => (
              <div className="form-check" key={idx}>
                <input className="form-check-input" type="checkbox" /> {item}
              </div>
            ))}

            {/* Beverages */}
            <h2 className="mt-3">Beverages</h2>
            {["Tea","Coffee","Cappuccino","Hot Chocolate","Other Drinks"].map((item, idx) => (
              <div className="form-check" key={idx}>
                <input className="form-check-input" type="checkbox" /> {item}
              </div>
            ))}

            {/* Other Services */}
            <h2 className="mt-3">Other Services</h2>
            {["Event Coordination","Marquee Rental/Hire","Photography","Videography","Live Band"].map((item, idx) => (
              <div className="form-check" key={idx}>
                <input className="form-check-input" type="checkbox" /> {item}
              </div>
            ))}

            <div className="col-12">
              <label className="form-label">Message</label>
              <textarea
                rows="5"
                className="form-control"
                placeholder="Tell us more about your project..."
              ></textarea>
            </div>

            <div className="col-12 text-center mt-4">
              <button type="submit" className="btn btn-gold px-5 py-2">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ✅ Footer Component */}
      <Footer />

      {/* Scripts */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" />
      <Script src="/script.js" />
    </>
  );
}
