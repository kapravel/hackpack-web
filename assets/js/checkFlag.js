(function() {
    'use strict';

    /**
     * Storage object we use to persist solved challenge information across page loads.
     */
    const solvedStorage = window.localStorage;
    solvedStorage.setItem("WARNING", "Don't even think about it!");

    /**
     * Key we use to access/set solved challenges in our storage object of choice.
     */
    const solvedChallengesKey = "solvedChallenges";

    /**
     * Checks to see if the challenge with the given name is solved, according to data entered on the page.
     * 
     * We check this by comparing the MD5 hash of the given flag against the true MD5. This MD5 value should be
     * stored on the page under an element with the ID ${challengeName}-flag-md5.
     * 
     * @param {String} challName The name of the challenge to check.
     */
    const isSolved = (challName) => {
        let challengeForm = document.getElementById(challName);
        let flagInput = document.getElementById(`${challName}-flag`);
        let flag = flagInput.value;
        let correctMd5 = document.getElementById(`${challName}-flag-md5`).innerText;
        let flagMd5 = hex_md5(flag);
        
        return flagMd5.toLowerCase() == correctMd5.toLowerCase();
    }

    /**
     * Checks against our internal store to see if the given challenge has been successfully solved (but does not actually
     * perform any checking against data entered on the page). This information should persist across page loads.
     * 
     * @param {String} challName The name of the challenge to check.
     */
    const challengePreviouslySolved = (challName) => {
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

    /**
     * Render the challenge with the given name as "solved" in the DOM.
     * @param {String} challName The challenge name to set as solved.
     */
    const renderChallengeSolved = (challName) => {
        let flagInput = document.getElementById(`${challName}-flag`);

        flagInput.classList.remove("is-invalid");
        flagInput.classList.add("is-valid");
        flagInput.style.backgroundColor = "lightgreen";

        let challengeTitle = document.getElementById(`${challName}-title`);

        challengeTitle.style.color = "green";
    }

    /**
     * Render the challenge with the given name as "failed" in the DOM.
     * @param {String} challName The challenge name to set as failed.
     */
    const renderChallengeFailed = (challName) => {
        let flagInput = document.getElementById(`${challName}-flag`);

        flagInput.classList.remove("is-valid");
        flagInput.classList.add("is-invalid");
        
        flagInput.style.backgroundColor = "";

        let challengeTitle = document.getElementById(`${challName}-title`);

        challengeTitle.style.color = "";
    }


    //////////////////////// ONLOAD LOGIC //////////////////////////////////
    let challengeForms = document.querySelectorAll(".challenge");

    challengeForms.forEach((challengeForm) => {
        let challengeName = challengeForm.id;

        // If this challenge form has been previously solved, add the appropriate CSS classes.
        if(challengePreviouslySolved(challengeName)) {
            renderChallengeSolved(challengeName);
        }

        // For each challenge form, check for flag validity on submit and prevent default form submit.
        challengeForm.addEventListener("submit", (e) => {
            if(isSolved(challengeName)) {
                renderChallengeSolved(challengeName);
                storeChallengeSolved(challengeName);
            } else {
                renderChallengeFailed(challengeName);
            }
            e.preventDefault();
        });
    });

    ///////////////// END ONLOAD LOGIC /////////////////////////////////////
})();