import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import zxcvbn from 'zxcvbn';
import sha1 from 'js-sha1';
import ProgressBar from './ProgressBar';
import { alphabets, keyboard } from './Data.js';

const textFieldStyle = {
  width: '80%',
  margin: '100px auto',
};

const listStyle = {
  listStylePosition: 'inside',
};

export default function Password() {
  const [input, setInput] = useState('');
  const [warning, setWarnings] = useState('');
  const [level, setLevel] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [score, setScore] = useState(-1);

  const analysis = async (i) => {
    if (i === '') {
      setWarnings('');
      getLevel(-1);
      setSuggestions([]);
    }

    const test = zxcvbn(i, ['priyankachopra']);
    setWarnings(test.feedback.warning);
    setScore(test.score);
    getLevel(test.score);
    setSuggestions(test.feedback.suggestions);
    console.log(test);

    const numTimesBreached = await checkBreached(i);

    if (keyboardPatternExists(i) && test.score > 1) {
      setWarnings('This password is made up of consecutive keys on a keyboard');
      setScore(0);
      getLevel(0);
      setSuggestions(['Add some words between the consecutive keys']);
    } else if (numTimesBreached !== 0) {
      setWarnings(
        `This password has been found in ${numTimesBreached} data breaches`
      );
      setScore(0);
      getLevel(0);

      const newSuggestions = suggestions;
      const newSuggestion =
        "Don't use a breached password. If it has been breached once, it is probably available to an attacker and can be breached again.";
      if (!newSuggestions.includes(newSuggestion)) {
        newSuggestions.push(newSuggestion);
      }

      setSuggestions(newSuggestions);
    }

    checkBreached(i);
  };

  async function checkBreached(i) {
    const sha = sha1(i).toUpperCase();
    const prefix = sha.slice(0, 5);
    const suffix = sha.slice(5, sha.length);

    try {
      const response = await fetch(
        `https://api.pwnedpasswords.com/range/${prefix}`
      );

      const data = await response.text();
      const hashes = data.split('\r\n');

      for (let hash of hashes) {
        const h = hash.split(':');
        if (suffix === h[0]) {
          return h[1];
        }
      }
    } catch {
      console.log('Api error');
    }

    return 0;
  }

  const keyboardPatternExists = (i) => {
    if (
      keyboard.includes(i.toLowerCase()) ||
      alphabets.includes(i.toLowerCase())
    ) {
      return true;
    }
    return false;
  };

  const handleInput = (e) => {
    const val = e.target.value;
    setInput(val);
    analysis(val);
  };

  const getLevel = (score) => {
    if (score === -1) {
      setLevel('');
    } else if (score > -1 && score < 2) {
      setLevel('The password is weak!');
    } else if (score === 2) {
      setLevel('The password is weak!');
    } else if (score === 3) {
      setLevel('The password is good!');
    } else if (score === 4) {
      setLevel('The password is strong!');
    } else {
      setLevel('The password is weak!');
    }
  };

  const generatePassword = () => {
    console.log('generate a new password!');
  };

  return (
    <div>
      <TextField
        label='Please enter a password'
        variant='outlined'
        style={textFieldStyle}
        color='secondary'
        onChange={handleInput}
      ></TextField>
      {input && <ProgressBar score={score} />}
      {warning && (
        <p>
          <b>WARNING</b>: {warning}
        </p>
      )}
      {suggestions.length > 0 && (
        <div>
          <p>
            <b>SUGGESTIONS:</b>
          </p>
          <ul style={listStyle}>
            {suggestions.map((s, i) => (
              <li key={`suggestion-${i}`}>{s}</li>
            ))}
          </ul>
        </div>
      )}
      {level && (
        <p>
          <b>STRENGTH: </b>
          {level}
        </p>
      )}
    </div>
  );
}
