package utils

import geb.spock.GebReportingSpec
import spock.lang.*


import utils.DbConnection


@Narrative("Cleanup Test Mine Record")
class  DataCleanup extends GebReportingSpec {
    def cleanupSpec() {
        println "Step 3 of 3: Cleaning test data"
        def cleanupScriptPath = new File('src/test/groovy/data/data_deletion.sql').absolutePath
        DbConnection.MDS_FUNCTIONAL_TEST.execute(new File(cleanupScriptPath).text)
    }
}