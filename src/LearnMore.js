import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Tip from './Tip.js';

const doNotHeader = {
  color: '#ff8a80',
};

const doHeader = {
  color: '#9ccc65',
};

export default function LearnMore() {
  return (
    <div>
      <Typography variant='h2'>How Can I Create a Strong Password?</Typography>
      <Typography align='left' style={{ marginBottom: '50px' }}>
        A lot of our personal lives, from private conversations to bank savings
        hide behind the barrier of password. However, despite the increased
        focus on data security, people continue to pick weak passwords. As
        technology is evolving, it is equipping hackers with better and faster
        tools to launch password attacks. In 2022,{' '}
        <b style={{ color: '#03DAC5' }}>65%</b> more passwords were compromised
        than in 2020 (Digital Shadows, 2020) and nearly <b style={{ color: '#03DAC5' }}>1 in 4</b> individuals were
        affected by a data breach in the last 18 months (Bitwarden, 2022). So it
        is clear that having a solid password is a key practice to keep your
        account and personal information safe online. However, <b style={{ color: '#03DAC5' }}>only around half </b>
        of internet users are somewhat familiar with the best practices of
        password security (Bitwarden, 2022). This app aims to improve this
        proportion by providing information on you how you can create a strong
        password and why a strong password is considered strong. There are a lot
        of websites out there that simply list the dos and don'ts but don’t go
        through the whys. On this page, I hope to explain the whys so that by
        following each suggestion you are aware of how you are making your
        password stronger and an attacker’s life just a little bit harder.
      </Typography>
      <Tip
        style={doNotHeader}
        heading='Avoid using personal information'
        content='
        Information such as your name, hometown, birthday, family member’s
        name, pet’s name, etc is too easy for an attacker to locate online eg.
        by finding your profile on social media.
        '
      />
      <Tip
        style={doNotHeader}
        heading='Avoid using common words and phrases'
        content={
          <Typography>
            {' '}
            Avoid using common dictionary words eg. apple by themselves and
            phrases eg. I Love You. A very common type of password attack is a{' '}
            <Link href='https://www.kaspersky.com/resource-center/definitions/what-is-a-dictionary-attack '>
              dictionary attack
            </Link>{' '}
            in which an attacker uses a predefined list of common dictionary
            words, phrases and common substitutions and relies on software to
            automatically feed this into the system to crack a user’s password.
          </Typography>
        }
      />
      <Tip
        style={doNotHeader}
        heading='Avoid using breached passwords'
        content='
            Hackers normally incorporate breached passwords into their list in
            preparation for the next dictionary attack. If a password is breached
            once and discovered in its plain text form (unencrypted), it can be
            breached easily again.
        '
      />
      <Tip
        style={doNotHeader}
        heading='Don’t trust password-strength checker apps too much (not even this one)'
        content={`Password analysis is tough and it is hard to design algorithms that cover all these criteria. Real attackers will use personal information, and application-specific information to check your password strength which password strength checker apps don’t have access to. `}
      />
      <Tip
        style={doNotHeader}
        heading='Don’t pick security answers that have easily obtainable answers/ don’t answer the question truthfully'
        content={`Security questions seem great because they allow us to easily log in to our accounts when we have forgotten our password. But security questions themselves, pose a security risk because they include very common questions whose answers can be located by an attacker easily. If an application requires you to choose a security question, it is best to choose the toughest one or just answer untruthfully. `}
      />
      <Tip
        style={doHeader}
        heading='Use a 12 - 16 character long password'
        content={
          <Typography>
            Longer passwords are more secure than shorter passwords, because
            they take longer to crack by a brute force attack. A{' '}
            <Link href='https://en.wikipedia.org/wiki/Brute-force_attack '>
              brute force
            </Link>{' '}
            attack is one where the attacker tries all permutations of
            characters to guess a password. So, by using a character set of 95
            possible characters, including upper case, lower case letters,
            numbers and special symbols, the attacker would need to make 95{' '}
            <sup>8</sup> ~ 6 quadrillion guesses at maximum to crack an
            8-character password. {'\n'}
            {'\n'}Although a complex password like ‘W8$p/a#x’ is great, it is
            also hard to remember. Instead, choosing a password that is a
            combination of unrelated words can make the password easier to
            remember while making it just as hard for the attacker to crack.
            Eg.cowsdressbluestars only uses a character set of 26 (lowercase
            a-z), but requires the attacker to make 26 <sup>17</sup> ~ 1
            septillion maximum guesses. It is also good to know that
            substituting special characters for related letters eg. @ to ‘a’
            does not do much because it is a commonly known substitution. You
            can find a list of commonly known substitutions here. Attackers are
            aware of this and there are tools available to perform these
            variations when trying to crack passwords.
          </Typography>
        }
      />
      <Tip
        style={doHeader}
        heading='Use unique passwords for each account'
        content={
          <Typography>
            Don’t ever use the same passwords in multiple places just because it
            is easier to remember them that way. If your password is breached,
            attackers can break into your other accounts. This is called a{' '}
            <Link href='https://owasp.org/www-community/attacks/Credential_stuffing'>
              credential surfing attack
            </Link>
            !
          </Typography>
        }
      />
      <Tip
        style={doHeader}
        heading='If you have to change a password, don’t create one that is too similar to the old one.'
        content={`It is definitely easy to keep a password that is similar to the previous one, but if you are ever prompted by an application to change a password, it is probably because the previous one was at risk. Using a very similar password, in this case, won’t make it too difficult for an attacker to crack your password again.`}
      />
      <Tip
        style={doHeader}
        heading='Use a password manager'
        content={`Remembering passwords is hard, which is why most people choose to use the same passwords across different websites. By using a password manager,  you can easily store unique passwords without having to remember them all. You just need to remember one password to log into your password manager. Just make sure this is a strong one!`}
      />
      <Tip
        style={doHeader}
        heading='Use MFA '
        content={`Use MFA 
        What is better than using a strong password? Having another layer of security! Using Multi-Factor Authentication (MFA) ensures anyone trying to break into your account must obtain 2 things, one your login credentials (username and password) as well as a code or approval from your MFA application (which is typically harder). It is better to use an authenticator app (eg. Google Authenticator, Microsoft Authenticator), rather than an SMS code because if the attacker has access to your phone number, they could try to impersonate you and have your phone number ported to a new number. 
        `}
      />
    </div>
  );
}
