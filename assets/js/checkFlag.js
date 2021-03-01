(function() {
    'use strict';

    /**
     * Storage object we use to persist solved challenge information across page loads.
     */
    const solvedStorage = window.localStorage;

    /**
     * Key we use to access/set solved challenges in our storage object of choice.
     */
    const solvedChallengesKey = "solvedChallenges";

    /**
     * Checks to see if the chall with the given name is successfully solved, according to data currently entered on the page.
     * 
     * We check this by comparing the MD5 hash of the given flag against the true MD5. If correct, we store that this challenge
     * has been solved, and display this information on the page.
     * 
     * @param {String} challName The name of the challenge to check.
     */
    const checkFlag = (challName) => {
        let challengeForm = document.getElementById(challName);
        let flagInput = document.getElementById(`${challName}-flag`);
        let flag = flagInput.value;
        let correctMd5 = document.getElementById(`${challName}-flag-md5`).innerText;
        let flagMd5 = hex_md5(flag);
        
        if(flagMd5.toLowerCase() === correctMd5.toLowerCase()) {
            challengeForm.classList.remove("challenge-incorrect");
            challengeForm.classList.add("challenge-solved");
            storeChallengeSolved(challName);
            return true;
        }

        challengeForm.classList.remove("challenge-solved");
        challengeForm.classList.add("challenge-incorrect");
        return false;
    }

    /**
     * Checks against our internal store to see if the given challenge has been successfully solved (but does not actually
     * perform any checking against data entered on the page). This information should persist across page loads.
     * 
     * @param {String} challName The name of the challenge to check.
     */
    const hasChallengeBeenSolved = (challName) => {
        // JSON.parse correctly handles the case where getItem returns null.
        let solvedChalls = JSON.parse(solvedStorage.getItem(solvedChallengesKey));

        return solvedChalls && solvedChalls.includes(challName);
    }

    /**
     * Sets the challenge with the given name to be considered solved, according to our internal store.
     * 
     * @param {String} challName The name of the challenge to update to the solved state.
     */
    const storeChallengeSolved = (challName) => {
        if(!solvedStorage.getItem(solvedChallengesKey)) {
            solvedStorage.setItem(solvedChallengesKey, "[]");
        }

        let solvedChalls = JSON.parse(solvedStorage.getItem(solvedChallengesKey));
        if(!solvedChalls.includes(challName)) {
            solvedChalls.push(challName);
        }

        solvedStorage.setItem(solvedChallengesKey, JSON.stringify(solvedChalls));
    }


    let challengeForms = document.querySelectorAll(".challenge");

    challengeForms.forEach((challengeForm) => {
        let challengeName = challengeForm.id;

        // If this challenge form has been previously solved, add the appropriate CSS classes.
        if(hasChallengeBeenSolved(challengeName)) {
            challengeForm.classList.add("challenge-solved");
        }

        // For each challenge form, check for flag validity on submit and prevent default form submit.
        challengeForm.addEventListener("submit", (e) => {
            checkFlag(challengeName);
            e.preventDefault();
        });
    });
})();