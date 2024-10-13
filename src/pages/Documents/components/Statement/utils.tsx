import cx from "classnames";
import { ClearAccordion } from "vit-ui-kit";

import { images } from "@shared/assets";

export const categories = [
  {
    title: "1.1 Newsletters",
    content: (
      <p>
        For this purpose we use the following data: <br />
        <br />
        <ul className="list-disc pl-20">
          <li>An email address</li>
        </ul>
        <br />
        The basis on which we may process these data is: <br />
        <br />
        <span className="text-vitreus-gradient-from">
          <a
            href="https://cookiedatabase.org/legal-bases/#consent"
            target="_blank"
            rel="noreferrer"
          >
            Upon the provision of consent
          </a>
        </span>
        .
        <br />
        <br />
        Retention period
        <br />
        <br />
        We retain this data until the service is terminated.
      </p>
    ),
  },
  {
    title: "1.2 To support services or products that a customer wants to buy or has purchased",
    content: (
      <p>
        For this purpose we use the following data: <br />
        <br />
        <ul className="list-disc pl-20">
          <li>Account name or alias</li>
          <li>An email address</li>{" "}
        </ul>
        <br />
        <br />
        The basis on which we may process these data is: <br />
        <br />
        <span className="text-vitreus-gradient-from">
          {" "}
          <a
            href="https://cookiedatabase.org/legal-bases/#agreement"
            target="_blank"
            rel="noreferrer"
          >
            It is necessary for the execution of a contract or preliminary procedures related to a
            contract to which the data subject is a party.
          </a>
        </span>
        <br />
        <br />
        Retention period
        <br />
        <br />
        We retain this data upon termination of the service for the following number of months: 12
      </p>
    ),
  },
  {
    title: "1.3 Compiling and analyzing statistics for website improvement.",
    content: (
      <p>
        For this purpose we use the following data: <br />
        <br />
        <ul className="list-disc pl-20">
          <li>Geolocation data</li>
          <li>IP Address</li>{" "}
        </ul>
        <br />
        <br />
        The basis on which we may process these data is: <br />
        <br />
        <span className="text-vitreus-gradient-from">
          {" "}
          <a
            href="https://cookiedatabase.org/legal-bases/#consent"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Upon the provision of consent
          </a>
        </span>
        .
        <br />
        <br />
        Retention period
        <br />
        <br />
        We retain this data upon termination of the service for the following number of months: 12
      </p>
    ),
  },
];

export const Items = [
  {
    content: (
      <p>
        In this privacy statement, we explain what we do with the data we obtain about you via{" "}
        <span className="text-vitreus-gradient-from">
          {" "}
          <a href="https://vtrs.io" target="_blank" rel="noreferrer">
            {" "}
            https://vtrs.io
          </a>
        </span>
        . We recommend you carefully read this statement. In our processing we comply with the
        requirements of privacy legislation. That means, among other things, that: <br /> <br />
        <ul className="list-disc pl-20">
          <li>
            we clearly state the purposes for which we process personal data. We do this by means of
            this privacy statement;
          </li>
          <li>
            we aim to limit our collection of personal data to only the personal data required for
            legitimate purposes;
          </li>
          <li>
            we first request your explicit consent to process your personal data in cases requiring
            your consent;
          </li>
          <li>
            we take appropriate security measures to protect your personal data and also require
            this from parties that process personal data on our behalf;
          </li>
          <li>
            we respect your right to access your personal data or have it corrected or deleted, at
            your request.
          </li>
        </ul>
        If you have any questions, or want to know exactly what data we keep of you, please contact
        us.
      </p>
    ),
  },
  {
    title: "1. Purpose And Categories Of Data",
    content: (
      <div>
        We may collect or receive personal information for a number of purposes connected with our
        business operations which may include the following: (click to expand) <br /> <br />
        {categories.map(({ content, title }) => (
          <ClearAccordion
            key={title}
            header={(isOpen) => (
              <div className={"flex items-center gap-16 w-full"}>
                <div className={"flex items-center shrink-0 xl:!shrink"}>
                  <images.rightDocs
                    className={cx("inline-block shrink-0  transition-all", {
                      ["rotate-90"]: isOpen,
                    })}
                  />
                  <images.docsIcon className="inline-block mx-8 shrink-0" />
                  <p className="text-vitreus-gradient-from w-fit shrink-0 xl:!shrink">{title}</p>
                </div>
                <div className="h-2 w-full bg-compliq-middle sm:!hidden" />
              </div>
            )}
          >
            {content}
          </ClearAccordion>
        ))}
      </div>
    ),
  },
  {
    title: "2. Disclosure Practices",
    content: (
      <p>
        We disclose personal information if we are required by law or by a court order, in response
        to a law enforcement agency, to the extent permitted under other provisions of law, to
        provide information, or for an investigation on a matter related to public safety. <br />{" "}
        <br />
        If our website or organisation is taken over, sold, or involved in a merger or acquisition,
        your details may be disclosed to our advisers and any prospective purchasers and will be
        passed on to the new owners.
      </p>
    ),
  },
  {
    title: "3. How We Respond To Do Not Track Signals & Global Privacy Control",
    content:
      "Our website responds to and supports the Do Not Track (DNT) header request field. If you turn DNT on in your browser, those preferences are communicated to us in the HTTP request header, and we will not track your browsing behavior.",
  },
  {
    title: "4. Security",
    content:
      "We are committed to the security of personal data. We take appropriate security measures to limit abuse of and unauthorized access to personal data. This ensures that only the necessary persons have access to your data, that access to the data is protected, and that our security measures are regularly reviewed.",
  },
  {
    title: "5. Third-Party Websites",
    content:
      "This privacy statement does not apply to third-party websites connected by links on our website. We cannot guarantee that these third parties handle your personal data in a reliable or secure manner. We recommend you read the privacy statements of these websites prior to making use of these websites.",
  },
  {
    title: "6. Amendments To This Privacy Statement",
    content:
      "We reserve the right to make amendments to this privacy statement. It is recommended that you consult this privacy statement regularly in order to be aware of any changes. In addition, we will actively inform you wherever possible.",
  },
  {
    title: "7. Accessing And Modifying Your Data",
    content: (
      <p>
        If you have any questions or want to know which personal data we have about you, please
        contact us. Please make sure to always clearly state who you are, so that we can be certain
        that we do not modify or delete any data of the wrong person. We shall provide the requested
        information only upon receipt of a verifiable consumer request. You can contact us by using
        the information below. You have the following rights:
        <br /> <br />
        <span className="text-vitreus-white">
          7.1 You have the following rights with respect to your personal data
        </span>{" "}
        <br /> <br />
        <ul className="list-disc pl-20">
          <li>You may submit a request for access to the data we process about you.</li>
          <li>You may object to the processing.</li>
          <li>
            You may request an overview, in a commonly used format, of the data we process about
            you.
          </li>
          <li>
            You may request correction or deletion of the data if it is incorrect or not or no
            longer relevant, or to ask to restrict the processing of the data.
          </li>
        </ul>
      </p>
    ),
  },
  {
    title: "8. Children",
    content:
      "Our website is not designed to attract children and it is not our intent to collect personal data from children under the age of consent in their country of residence. We therefore request that children under the age of consent do not submit any personal data to us.",
  },
  {
    title: "9. Contact Details",
    content: (
      <p>
        This website is owned and operated by Vitreus DAO. <br /> <br />
        Email:{" "}
        <a href="mailto:support@vtrs.io" className="text-vitreus-gradient-from">
          support@vtrs.io
        </a>
        <br />
        Discord:{" "}
        <a
          href="https://discord.gg/vitreus"
          target="_blank"
          rel="noreferrer"
          className="text-vitreus-gradient-from mx-6 whitespace-nowrap"
        >
          https://discord.gg/vitreus&nbsp;
          <images.linkAlt className="inline-block" />
        </a>
      </p>
    ),
  },
];
