import { config } from "../config";
import { InternetNavigator } from "./InternetNavigator";
import { RevokeAccessContent } from "./RevokeAccess/RevokeAccessContent";
import { Anchor } from "./typography/Anchor";
import { Heading } from "./typography/Heading";
import { ListItem } from "./typography/ListItem";
import { Paragraph } from "./typography/Paragraph";
import { UnorderedList } from "./typography/UnorderedList";

export function About() {
  return (
    <InternetNavigator defaultUrl={config.urls.about} title="About">
      <Heading>About</Heading>
      <Paragraph>
        Mastodon Flock was a web application that looked for Twitter users on
        ActivityPub-enabled platforms (the &ldquo;Fediverse&rdquo;), such as
        Mastodon.
      </Paragraph>
      <Paragraph>
        It worked by connecting to your Twitter account, reading your contacts
        profile information, and checking if they have mentioned any external
        accounts with a URL or email.
      </Paragraph>
      <Paragraph>
        Matching accounts were then listed so you can connect with them. If you
        use Mastodon, you were able to automatically follow, unfollow or export
        the results in a CSV format.
      </Paragraph>
      <Paragraph>
        This was a personal project from{" "}
        <Anchor href="https://wes.dev/" target="_blank" rel="noopener">
          Wes Souza
        </Anchor>
        , and an ode to the{" "}
        <Anchor
          href="https://react95.io/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Windows 95
        </Anchor>{" "}
        era. You can read more about the{" "}
        <Anchor href="#technology-stack">technology stack below</Anchor>, and{" "}
        <Anchor
          href="https://www.buymeacoffee.com/WesSouza"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          buy me a coffee
        </Anchor>{" "}
        if you wish.
      </Paragraph>

      <Heading level={2} anchorName="how-to-use-it">
        How to use it?
      </Heading>
      <Paragraph>
        You can&rsquo;t. Unless I can raise at least US$ 100 a month for the API
        costs. Fuck Elon.
      </Paragraph>

      <Heading level={2} anchorName="how-to-use-it">
        Ok, but how did we use it before?
      </Heading>
      <Paragraph>
        On the <Anchor href={config.urls.home}>Setup Wizard</Anchor>, click
        Next. You would be presented with two choices:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          &ldquo;Typical&rdquo; used your Mastodon instance to find accounts.
          Once finished, it would allow you to review, follow or unfollow the
          discovered accounts.
        </ListItem>
        <ListItem>
          &ldquo;Advanced&rdquo; could be used to search every account on their
          own instance. This could be used if you were not on Mastodon, but
          another ActivityPub-compatible network. Note: this process was slower,
          and you weren&rsquo;t be able to follow or unfollow accounts using
          this software.
        </ListItem>
      </UnorderedList>
      <Paragraph>
        Once you proceed, you would be asked to authenticate our software on
        Twitter, which allowed us to read the necessary information from your
        follows.
      </Paragraph>
      <Paragraph>
        Then, if you chose the &ldquo;Typical&rdquo; method, you would be
        prompted about your Mastodon instance, and asked to authenticate our
        software on it. That allowed us to perform our search, as well as to let
        you follow and unfollow accounts.
      </Paragraph>
      <Paragraph>
        After the Setup concludes, you were taken to the Mastodon Flock results
        window, which displayed every account that we could find.
      </Paragraph>

      <Heading level={2} anchorName="how-does-it-work">
        How Did it Work?
      </Heading>
      <Paragraph>
        Mastodon Flock relied on your Twitter follows information to discover
        their Fediverse account. The Setup process looked for potential emails
        or URLs on their name, bio, location, website and pinned tweet.
      </Paragraph>
      <Paragraph>
        Afterwards, a search process navigated through each potential account,
        and if it found a match, stored it locally. Once the process finished,
        you were presented with the results, where you could perform actions.
      </Paragraph>
      <Paragraph>
        Everything was stored in your browser. Once you navigated away, all
        information was deleted.
      </Paragraph>
      <Paragraph>
        A comprehensive <Anchor href="/privacy">Privacy Policy</Anchor> is
        available detailing what information was used and how it was handled.
      </Paragraph>

      <RevokeAccessContent headingLevel={2} />

      <Heading level={2} anchorName="technology-stack">
        Technology Stack
      </Heading>
      <Paragraph>
        Mastodon Flock is a TypeScript project that utilizes{" "}
        <Anchor
          href="https://reactjs.org/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          React
        </Anchor>{" "}
        components and{" "}
        <Anchor
          href="https://astro.build/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Astro
        </Anchor>{" "}
        as its building framework. The user interface is powered by{" "}
        <Anchor
          href="https://react95.io/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          React95
        </Anchor>{" "}
        components, and additional{" "}
        <Anchor
          href="https://styled-components.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          styled-components
        </Anchor>{" "}
        styles.
      </Paragraph>
      <Paragraph>
        On the server, we deploy assets and serverless functions to{" "}
        <Anchor
          href="https://vercel.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Vercel
        </Anchor>
        , and use{" "}
        <Anchor
          href="https://www.mongodb.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          MongoDB
        </Anchor>{" "}
        via{" "}
        <Anchor
          href="https://mongoosejs.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Mongoose
        </Anchor>{" "}
        for storing the list of Mastodon instances and the necessary application
        tokens registered with them to enable user authentication (user tokens
        are never stored).
      </Paragraph>

      <Heading level={3} anchorName="source-code">
        Thanks and Acknowledgements
      </Heading>
      <Paragraph>
        I&rsquo;d like to thank{" "}
        <Anchor
          href="https://github.com/arturbien"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Artur Bień
        </Anchor>{" "}
        for the huge CSS help (as well as React95), as well as{" "}
        <Anchor
          href="https://www.gui.co"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Gui Albuquerque
        </Anchor>{" "}
        and{" "}
        <Anchor
          href="http://v42.com.br"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Vitor
        </Anchor>{" "}
        for helping me test the project.
      </Paragraph>
      <Paragraph>
        I also took inspiration from other great Twitter-to-Mastodon tools such
        as{" "}
        <Anchor
          href="https://twitodon.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Twitodon
        </Anchor>
        ,{" "}
        <Anchor
          href="https://fedifinder.glitch.me/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Fedifinder
        </Anchor>
        ,{" "}
        <Anchor
          href="https://debirdify.pruvisto.org/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Debirdify
        </Anchor>{" "}
        and{" "}
        <Anchor
          href="https://www.movetodon.org/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Movetodon
        </Anchor>
        .
      </Paragraph>

      <Heading level={3} anchorName="source-code">
        Source Code
      </Heading>
      <Paragraph>
        The software is completely open source and available at{" "}
        <Anchor
          href="https://github.com/WesSouza/mastodon-flock"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          github.com/WesSouza/mastodon-flock
        </Anchor>
        .
      </Paragraph>

      <Heading level={2} anchorName="questions-and-comments">
        Questions and Comments
      </Heading>
      <Paragraph>
        Feel free to get in touch by{" "}
        <Anchor href="mailto:hey@wes.dev?subject=Mastodon%20Flock">
          email
        </Anchor>{" "}
        or{" "}
        <Anchor
          href="https://twitter.com/WesSouza_"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Twitter
        </Anchor>
        . You can also message me on{" "}
        <Anchor
          href="https://mastodon.social/@wessouza"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Mastodon
        </Anchor>
        , but be aware that direct messages are not private and can be read by
        instance administrators.
      </Paragraph>
    </InternetNavigator>
  );
}
