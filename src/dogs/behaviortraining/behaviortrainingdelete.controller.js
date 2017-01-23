/*jslint browser: false */
/*global angular */

(function () {
    'use strict';

    function BehaviorTrainingDeleteController($uibModalInstance, bbData, dogId, behaviorTrainingId) {

        var self = this;

        self.saveData = function() {
            bbData.save({
                url: 'api/dogs/' + encodeURIComponent(dogId) + '/ratings/' + encodeURIComponent(behaviorTrainingId),
                type: 'DELETE'
            }).then(function (result) {
                $uibModalInstance.close(result.data);
            }).catch(function (result) {
                self.error = result.data.error;
            });
        }

        bbData.load({
            data: "api/dogs/" + encodeURIComponent(dogId) + '/ratings/' + encodeURIComponent(behaviorTrainingId)
        }).then(function (result) {
            self.rating = result.data;
        }).catch(function (result) {
            self.error = result.data.error;
        });
    }

    BehaviorTrainingDeleteController.$inject = ['$uibModalInstance', 'bbData', 'dogId', 'behaviorTrainingId'];

    angular.module('barkbaud')
        .controller('BehaviorTrainingDeleteController', BehaviorTrainingDeleteController)
}());