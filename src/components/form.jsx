import React from 'react';

const SubscribeForm = () => {
  return (
    <div id="mc_embed_shell">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
      <style>
        {`
          #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
          /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
             We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
        `}
      </style>
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us21.list-manage.com/subscribe/post?u=1e58c363559d7dcbaa012706e&amp;id=afd1390c5c&amp;f_id=00075ce1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
                value=""
              />
            </div>
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <input
                type="text"
                name="b_1e58c363559d7dcbaa012706e_afd1390c5c"
                tabIndex="-1"
                value=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Subscribe"
                />
                <p className="brandingLogo" style={{ margin: '0px auto' }}>
                  <a href="http://eepurl.com/iu-gnw" title="Mailchimp - email marketing made easy and fun">
                    <img
                      src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"
                      alt="referral badge"
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <script src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js" />
      <script>
        {`
          (function($) {
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[0]='EMAIL';
            ftypes[0]='merge';
            false
          })(jQuery);
          var $mcj = jQuery.noConflict(true);
        `}
      </script>
    </div>
  );
};

export default SubscribeForm;
