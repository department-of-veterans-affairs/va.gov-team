import React from 'react';
import { Link } from 'react-router';
import recordEvent from '../../../platform/monitoring/record-event';

class InstructionsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    sessionStorage.setItem('dw-session-started', true);
  }

  handleFAQToggle = (e) => {
    e.preventDefault();
    recordEvent({ event: 'discharge-upgrade-faq-toggle' });
    this.setState({
      [e.target.name]: !this.state[e.target.name],
    });
  }

  render() {
    return (
      <div className="dw-instructions">
        <h1>How to Apply for a Discharge Upgrade</h1>
        <main itemScope itemType="http://schema.org/FAQPage">
          <div className="row">
            <article className="usa-content columns">
              <div className="va-introtext">
                <p>Answer a series of questions to get customized step-by-step instructions on how to apply for a discharge upgrade or correction. If your application goes through and your discharge is upgraded, you’ll be eligible for the VA benefits you earned during your period of service.</p>
              </div>
              <div className="main home signup" role="main">
                <div className="section main-menu">
                  <div className="row">
                    <div className="small-12 columns">
                      <div>
                        <p>
                          All branches of the military consider you to have a strong case for a discharge upgrade if you can show your discharge was connected to any of these categories:
                        </p>
                        <ul>
                          <li>Mental health conditions, including posttraumatic stress disorder (PTSD)</li>
                          <li>Traumatic brain injury (TBI)</li>
                          <li>Sexual assault or harassment during military service (at VA, we refer to this as military sexual trauma or MST)</li>
                          <li>Sexual orientation (including under the Don’t Ask, Don’t Tell policy)</li>
                        </ul>
                        <p>
                          The information you enter on the next page is completely confidential.
                        </p>
                        <p>
                          <Link className="usa-button-primary va-button" to="questions">Get Started »</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="small-12 columns">
                      <div className="usa-accordion">
                        <ul className="usa-unstyled-list">
                          <li itemScope itemType="http://schema.org/Question">
                            <button className="usa-button-unstyled usa-accordion-button" aria-controls="dbq4" itemProp="name" aria-expanded={!!this.state.q1} onClick={this.handleFAQToggle} name="q1">Can I get VA benefits without a discharge upgrade?</button>
                            <div id="dbq4" className="usa-accordion-content" itemProp="acceptedAnswer" itemScope itemType="http://schema.org/Answer" aria-hidden={!this.state.q1}>
                              <div itemProp="text">
                                <p>
                                  Even with a less than honorable discharge, you may be able to access some VA benefits through the Character of Discharge review process. When you apply for VA benefits, we’ll review your record to determine if your service was “honorable for VA purposes.” This review can take up to a year. Please provide us with documents supporting your case, similar to the evidence you’d send with an application to upgrade your discharge.
                                </p>
                                <p>You may want to consider finding someone to advocate on your behalf, depending on the complexity of your case. A lawyer or Veterans Service Organization (VSO) can collect and submit supporting documents for you. <a href="https://www.benefits.va.gov/vso/varo.asp">Find a VSO near you.</a></p>
                                <p><strong>Note:</strong> You can ask for a VA Character of Discharge review while at the same time applying for a discharge upgrade from the Department of Defense (DoD) or the Coast Guard.</p>
                                <p>If you need mental health services related to PTSD or other mental health problems linked to your service (including conditions related to an experience of military sexual trauma), you may qualify for VA health benefits right away, even without a VA Character of Discharge review or a discharge upgrade.</p>
                                <p>Learn more about:</p>
                                <ul>
                                  <li><a href="/health-care/health-conditions/military-sexual-trauma/">VA health benefits for Veterans who've experienced military sexual trauma</a></li>
                                  <li><a href="/health-care/health-conditions/mental-health/">VA health benefits for Veterans with mental health conditions</a></li>
                                  <li><a href="/health-care/health-conditions/mental-health/ptsd/">VA health benefits for Veterans with PTSD</a></li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li itemScope itemType="http://schema.org/Question">
                            <button className="usa-button-unstyled usa-accordion-button" aria-controls="dbq1" itemProp="name" aria-expanded={!!this.state.q2} onClick={this.handleFAQToggle} name="q2">What if I already applied for an upgrade or correction and was denied?</button>
                            <div id="dbq1" className="usa-accordion-content" itemProp="acceptedAnswer" itemScope itemType="http://schema.org/Answer" aria-hidden={!this.state.q2}>
                              <div itemProp="text">
                                <p>If your previous upgrade application was denied, you can apply again, but you may have to follow a different process. Click the <strong>Get Started</strong> button above. When you’re asked if you’ve applied before, select <strong>Yes</strong>. After you’ve answered all the questions, you’ll see application instructions specific to your situation.</p>
                                <p>Applying again is most likely to be successful if your application is significantly different from when you last applied. For example, you may have additional evidence that wasn’t available to you when you last applied, or the Departent of Defense (DoD) may have issued new rules regarding discharges. DoD rules changed for discharges related to PTSD, TBI, and mental health in 2014, military sexual harassment and assault in 2017, and sexual orientation in 2011.</p>
                              </div>
                            </div>
                          </li>
                          <li itemScope itemType="http://schema.org/Question">
                            <button className="usa-button-unstyled usa-accordion-button" aria-controls="dbq2" itemProp="name" aria-expanded={!!this.state.q3} onClick={this.handleFAQToggle} name="q3">What if I have discharges for more than one period of service?</button>
                            <div id="dbq2" className="usa-accordion-content" itemProp="acceptedAnswer" itemScope itemType="http://schema.org/Answer" aria-hidden={!this.state.q3}>
                              <div itemProp="text">
                                <p>If the Department of Defense (DoD) or the Coast Guard determined you served honorably in one period of service, you may use that honorable characterization to establish eligibility for VA benefits, even if you later received a less than honorable discharge. You earned your benefits during the period in which you served honorably. Make sure you specifically mention your period of honorable service when applying for VA benefits.</p>
                                <p><strong>Note:</strong> The only exception is for service-connected disability compensation. You’re only eligible to earn disability compensation for disabilities you suffered during a period of honorable service. You can’t use an honorable discharge from one period of service to establish eligibility for a service-connected disability from a different period of service.</p>
                              </div>
                            </div>
                          </li>
                          <li itemScope itemType="http://schema.org/Question">
                            <button className="usa-button-unstyled usa-accordion-button" aria-controls="dbq3" itemProp="name" aria-expanded={!!this.state.q4} onClick={this.handleFAQToggle} name="q4">What if I served honorably, but didn’t receive discharge paperwork?</button>
                            <div id="dbq3" className="usa-accordion-content" itemProp="acceptedAnswer" itemScope itemType="http://schema.org/Answer" aria-hidden={!this.state.q4}>
                              <div itemProp="text">
                                <p>You’re eligible for VA benefits at the end of a period of honorable service, even if you didn’t receive a discharge in the form of a DD214. If you completed your original contract period without any disciplinary problems, you can use this period of service to establish your eligibility, even if you re-enlisted or extended your service and did not receive an “honorable” DD214 at the end of your second period of service. If you completed a period of honorable service that’s not reflected on a DD214, make sure you specifically mention this period of service when you apply for VA benefits. We may do a Character of Discharge review to confirm your eligibility.</p>
                                <p>You can also apply to the Department of Defense (DoD) or the Coast Guard for a second DD214 only for that honorable period of service. Click the <strong>Get Started</strong> button above and answer the questions based on your most recent discharge. When you’re asked if you completed a period of service in which your character of service was honorable or general under honorable conditions, select: “Yes, I completed a prior period of service, but I did not receive discharge paperwork from that period.”</p>
                              </div>
                            </div>
                          </li>
                          <li itemScope itemType="http://schema.org/Question">
                            <button className="usa-button-unstyled usa-accordion-button" aria-controls="dbq5" itemProp="name" aria-expanded={!!this.state.q5} onClick={this.handleFAQToggle} name="q5">What if I have a DD215 showing an upgraded discharge, but my DD214 still isn’t correct?</button>
                            <div id="dbq5" className="usa-accordion-content" itemProp="acceptedAnswer" itemScope itemType="http://schema.org/Answer" aria-hidden={!this.state.q5}>
                              <div itemProp="text">
                                <p>When the Department of Defense (DoD) or the Coast Guard upgrades a Veteran’s discharge, it usually issues a DD215 showing corrections to the DD214. The DoD or the Coast Guard attaches the DD215 to the old DD214—which still shows the outdated discharge and related information. While the discharge on the DD215 is the correct discharge, a Veteran may still want a new DD214 that shows no record of their earlier characterization of discharge.</p>
                                <p>If you have a DD215 and want an updated DD214, click the <strong>Get Started</strong> button above. On the next page, select: “I received a discharge upgrade or correction, but my upgrade came in the form of a DD215, and I want an updated DD214.” After you’ve answered all the questions, you’ll see instructions for how to request a new DD214.</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </main>
      </div>
    );
  }
}

export default InstructionsPage;
