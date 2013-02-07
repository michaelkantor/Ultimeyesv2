
package com.logs_ultimeyesvision_com_devdb;

import java.util.List;
import com.logs_ultimeyesvision_com_devdb.data.output.GetLicensesFromLogsRtnType;
import com.logs_ultimeyesvision_com_devdb.data.output.GetUsernamesFromLogsRtnType;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "logs_ultimeyesvision_com_devDB"
 *  12/28/2012 17:29:11
 * 
 */
@SuppressWarnings("unchecked")
public class Logs_ultimeyesvision_com_devDB
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public List<GetLicensesFromLogsRtnType> getLicensesFromLogs(PagingOptions pagingOptions) {
        return ((List<GetLicensesFromLogsRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Logs_ultimeyesvision_com_devDBConstants.getLicensesFromLogsQueryName), pagingOptions));
    }

    public Integer deleteStaticByCustomer(Integer customerId, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Logs_ultimeyesvision_com_devDBConstants.deleteStaticByCustomerQueryName), customerId, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogCalibration getUltimeyesLogCalibrationById(Integer id, PagingOptions pagingOptions) {
        List<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogCalibration> rtn = ((List<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogCalibration> ) dsMgr.invoke(taskMgr.getQueryTask(), (Logs_ultimeyesvision_com_devDBConstants.getUltimeyesLogCalibrationByIdQueryName), id, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Integer deleteSummaryByCustomer(Integer customerId, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Logs_ultimeyesvision_com_devDBConstants.deleteSummaryByCustomerQueryName), customerId, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Integer deleteDynamicByCustomer(Integer customerId, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Logs_ultimeyesvision_com_devDBConstants.deleteDynamicByCustomerQueryName), customerId, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<GetUsernamesFromLogsRtnType> getUsernamesFromLogs(PagingOptions pagingOptions) {
        return ((List<GetUsernamesFromLogsRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Logs_ultimeyesvision_com_devDBConstants.getUsernamesFromLogsQueryName), pagingOptions));
    }

    public Integer deleteCalibByCustomer(Integer customerId, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Logs_ultimeyesvision_com_devDBConstants.deleteCalibByCustomerQueryName), customerId, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}
