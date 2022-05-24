import React from 'react';

const ConfirmModal = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-5" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box w-11/12 md:w-[600px] max-w-5xl">
                    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label for="my-modal-5" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;